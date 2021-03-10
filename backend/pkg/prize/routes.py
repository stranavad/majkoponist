from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask_mail import Message
from pkg import api_token, mydb, mycursor, mail_global, mail_to_send
import json



get_prizes = reqparse.RequestParser()
get_prizes.add_argument("token", type=str, help="API token")
get_prizes.add_argument("average", type=str, help="User average for returning prizes")

create_prize = reqparse.RequestParser()
create_prize.add_argument("token", type=str, help="API token")
create_prize.add_argument("name", type=str, help="Prize Name")
create_prize.add_argument("information", type=str, help="Prize description")
create_prize.add_argument("image", type=str, help="Prize image")

update_prize = reqparse.RequestParser()
update_prize.add_argument("token", type=str, help="API token")
update_prize.add_argument("name", type=str, help="Prize Name")
update_prize.add_argument("information", type=str, help="Prize description")
update_prize.add_argument("image", type=str, help="Prize image")
update_prize.add_argument("id", type=str, help="Prize ID")

delete_prize = reqparse.RequestParser()
delete_prize.add_argument("token", type=str, help="API token")
delete_prize.add_argument("id", type=str, help="Prize ID")

get_prize_args = reqparse.RequestParser()
get_prize_args.add_argument("token", type=str, help="API token")
get_prize_args.add_argument("prize_name", type=str, help="Name of the prize")
get_prize_args.add_argument("address", type=str, help="Information from winner")
get_prize_args.add_argument("answers", action="append")
get_prize_args.add_argument("email", type=str)
get_prize_args.add_argument("first_name", type=str)
get_prize_args.add_argument("last_name", type=str)
get_prize_args.add_argument("phone_number", type=str)
get_prize_args.add_argument("average", type=str)


def send_mail(args):
    msg = Message(
        "Dalsi vyherce kvizu Hany Hegerovej",
        sender="hanahegerovaquiz@gmail.com",
        recipients=["mr.ajemifajn@protonmail.com", mail_to_send, "hanahegerovaquiz@gmail.com"]
    )

    msg_body = f"""
    User: {args["first_name"]} {args["last_name"]}.
    Email: {args["email"]}.
    Phone number: {args["phone_number"]}.

    Skore: {args["average"]}

    Zvolil vyhru "{args['prize_name']}".
    Adresa "{args['address']}".

    """

    for answer in args['answers']:
        # replacing json from web to python dictionary -> You can use all quotes in FE form
        # but they will be converted to single quotes
        answer = answer.replace("{\'", "{\"")
        answer = answer.replace("\': \'", "\": \"")
        answer = answer.replace("\', \'", "\", \"")
        answer = answer.replace("\'}", "\"}")
        answer = answer.replace(", \'", ", \"")
        answer = answer.replace("\': ", "\": ")
        obj = json.loads(answer)
        msg_body += (f"""
        Otazka: {obj["question"]}.
        Obtiznost: {obj["difficulty"]}.
        Odpoved uzivatele: {obj["user_answer"]}.
        Spravna odpoved: {obj["correct_answer"]}.
        Odpovedal spravne: {obj["correct"]}
        """)
    msg.body = msg_body
    mail_global.send(msg)

    msg = Message(
        "Gratulujeme k výhře v kvíze o Haně Hegerovej",
        sender="hanahegerovaquiz@gmail.com",
        recipients=[args["email"]]
    )

    msq_body = f"""
    Toto je random zprava.

    Vybral jste si vyhru:
        {args["prize_namo"]}
    V blizke dobe vas budeme kontaktovat ohledne predani vyhry

    Kontakt v pripade problemu:
        no to snad ne
    """




def add_prize_result(args):
    #  Setting the prize for the appropriate user
    prize = {"prize_name": args["prize_name"], "information": args["information"]}
    sql = "UPDATE answered SET prize = JSON_SET(prize, '$.prize', %s) WHERE email = %s"
    mycursor.execute(sql, (json.dumps(prize), args["email"]))
    mydb.commit()


class Prizes(Resource):
    # Getting prizes from db to show on web
    @cross_origin(supports_credentials=True)
    def get(self):
        args = get_prizes.parse_args()
        if args["token"] == api_token:
            if args["average"] == 1:
                mycursor.execute("SELECT * FROM prizes")
            else:
                mycursor.execute("SELECT * FROM prizes WHERE special = False")
            result = mycursor.fetchall()
            prizes_return = list()
            for res in result:
                res_dict = {
                    "id": res[0],
                    "name": res[1],
                    "description": res[2],
                    "image": res[4],
                }
                prizes_return.append(res_dict)
            return {"prizes": prizes_return}
        else:
            return {"message": "Wrong api token"}

    # User submits form
    @cross_origin(supports_credentials=True)
    def post(self):
        args = get_prize_args.parse_args()
        if args['token'] == api_token:
            add_prize_result(args)  # Add prize to user
            send_mail(args)  # Send mail to admin
            return {"message": "Prize"}
        else:
            return {"message": "Wrong API token"}

    # Creating prize
    @cross_origin(supports_credentials=True)
    def put(self):
        args = create_prize.parse_args()
        if args["token"] == api_token:
            mycursor.execute("INSERT INTO prizes (name, description, image) VALUES (%s, %s, %s)",
                             (args["name"], args["information"], args['image']))
            mydb.commit()
            return {"message": "Prize was added"}
        else:
            return {"message": "Wrong api token"}

    # Updating prize
    @cross_origin(supports_credentials=True)
    def patch(self):
        args = update_prize.parse_args()
        if args["token"] == api_token:
            mycursor.execute("DELETE FROM prizes WHERE id = %s", (args["id"],))
            mydb.commit()
            mycursor.execute("INSERT INTO prizes (name, description, image) VALUES (%s, %s, %s)",
                             (args["name"], args["information"], args['image']))
            mydb.commit()
            return {"message": "Prize was edited"}
        else:
            return {"message": "Wrong api token"}

    # Deleting prize
    @cross_origin(supports_credentials=True)
    def delete(self):
        args = delete_prize.parse_args()
        if args["token"] == api_token:
            mycursor.execute("DELETE FROM prizes WHERE id = %s",
                             (args["id"],))
            mydb.commit()
            return {"message": "Prize was edited"}
        else:
            return {"message": "Wrong api token"}
