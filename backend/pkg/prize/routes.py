from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask_mail import Message
from pkg import api_token, mydb, mycursor, mail_global
import json



get_prizes = reqparse.RequestParser()
get_prizes.add_argument("token", type=str, help="API token")

create_prize = reqparse.RequestParser()
create_prize.add_argument("token", type=str, help="API token")
create_prize.add_argument("name", type=str, help="Prize Name")
create_prize.add_argument("description", type=str, help="Prize description")

get_prize_args = reqparse.RequestParser()
get_prize_args.add_argument("token", type=str, help="API token")
get_prize_args.add_argument("prize_name", type=str, help="Name of the prize")
get_prize_args.add_argument("information", type=str, help="Information from winner")
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
        recipients=["mr.ajemifajn@protonmail.com"]
    )

    msg_body = f"""
    User: {args["first_name"]} {args["last_name"]}.
    Email: {args["email"]}.
    Phone number: {args["phone_number"]}.
    
    Skore: {args["average"]}
    
    Zvolil vyhru "{args['prize_name']}".
    Dodal informacie "{args['information']}".
    
    """

    for answer in args['answers']:
        # answer = answer.replace("\'", "\"")
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


def add_prize_result(args):
    prize = {"prize_name": args["prize_name"], "information": args["information"]}
    sql = "UPDATE answered SET prize = JSON_SET(prize, '$.prize', %s) WHERE email = %s"
    mycursor.execute(sql, (json.dumps(prize), args["email"]))
    mydb.commit()


class Prizes(Resource):
    @cross_origin(supports_credentials=True)
    def get(self):
        args = get_prizes.parse_args()
        if args["token"] == api_token:
            mycursor.execute("SELECT * FROM prizes")
            result = mycursor.fetchall()
            prizes_return = list()
            for res in result:
                res_dict = {
                    "id": res[0],
                    "name": res[1],
                    "description": res[2]
                }
                prizes_return.append(res_dict)
            return {"prizes": prizes_return}
        else:
            return {"message": "Wrong api token"}

    @cross_origin(supports_credentials=True)
    def post(self):
        args = get_prize_args.parse_args()
        if args['token'] == api_token:
            add_prize_result(args)
            send_mail(args)
            return {"message": "No U"}
        else:
            return {"message": "Wrong API token"}

    @cross_origin(supports_credentials=True)
    def put(self):
        args = create_prize.parse_args()
        if args["token"] == api_token:
            mycursor.execute("INSERT INTO prizes (name, description) VALUES (%s, %s)", (args["name"], args["description"]))
            mydb.commit()
            return {"message": "Prize was added"}
        else:
            return {"message": "Wrong api token"}