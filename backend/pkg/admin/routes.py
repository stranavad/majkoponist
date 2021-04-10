from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from pkg import api_token, get_connection, mail_global
import json
import mysql.connector

create_question_args = reqparse.RequestParser()
create_question_args.add_argument("question", type=str, help="Question")
create_question_args.add_argument("correct_answer", type=str, help="Right answer")
create_question_args.add_argument("a2", type=str, help="Answer 2")
create_question_args.add_argument("a3", type=str, help="Answer 3")
create_question_args.add_argument("a4", type=str, help="Answer 4")
create_question_args.add_argument("difficulty", type=str, help="Difficulty. Between 1-4")
create_question_args.add_argument("token", type=str, help="API token")

update_question_args = reqparse.RequestParser()
update_question_args.add_argument("id", type=int, help="Question ID")
update_question_args.add_argument("question", type=str, help="Question")
update_question_args.add_argument("correct_answer", type=str, help="Right answer")
update_question_args.add_argument("a2", type=str, help="Answer 2")
update_question_args.add_argument("a3", type=str, help="Answer 3")
update_question_args.add_argument("a4", type=str, help="Answer 4")
update_question_args.add_argument("difficulty", type=str, help="Difficulty. Between 1-4")
update_question_args.add_argument("token", type=str, help="API token")

delete_question_args = reqparse.RequestParser()
delete_question_args.add_argument("id", type=int, help="Question ID")
delete_question_args.add_argument("token", type=str, help="API token")

token_parser = reqparse.RequestParser()
token_parser.add_argument("token", type=str, help="API token")


class Admin(Resource):
    @cross_origin(supports_credentials=True)
    def get(self):
        token_arg = token_parser.parse_args()
        if token_arg["token"] == api_token:
            try:
                mydb, mycursor = get_connection()
                mycursor.execute("SELECT * FROM questions")
                questions_db = mycursor.fetchall()
                mycursor.execute("SELECT * FROM answered")
                answered_db = mycursor.fetchall()
                answered = list()
                for answer in answered_db:
                    questions_db_json = json.loads(answer[5])
                    questions_list_1, questions_list_2, questions_list_3 = list(), list(), list()
                    if questions_db_json["questions1"]:
                        for question in questions_db_json["questions1"]:
                            questions_list_1.append({
                                "question": question,
                                "difficulty": questions_db_json["questions1"][question]["difficulty"],
                                "user_answer": questions_db_json["questions1"][question]["user_answer"],
                                "correct_answer": questions_db_json["questions1"][question]["correct_answer"],
                                "correct": questions_db_json["questions1"][question]["correct"]
                            })

                        if questions_db_json["questions2"]:
                            for question in questions_db_json["questions2"]:
                                questions_list_2.append({
                                    "question": question,
                                    "difficulty": questions_db_json["questions2"][question]["difficulty"],
                                    "user_answer": questions_db_json["questions2"][question]["user_answer"],
                                    "correct_answer": questions_db_json["questions2"][question]["correct_answer"],
                                    "correct": questions_db_json["questions2"][question]["correct"]
                                })
                            if questions_db_json["questions3"]:
                                for question in questions_db_json["questions3"]:
                                    questions_list_3.append({
                                        "question": question,
                                        "difficulty": questions_db_json["questions3"][question]["difficulty"],
                                        "user_answer": questions_db_json["questions3"][question]["user_answer"],
                                        "correct_answer": questions_db_json["questions3"][question]["correct_answer"],
                                        "correct": questions_db_json["questions3"][question]["correct"]
                                    })
                            else:
                                questions_list_3.append("")
                        else:
                            questions_list_2.append("")
                    else:
                        questions_list_1.append("")
                    answered.append({
                        "email": answer[1],
                        "name": answer[2],
                        "phone_number": answer[3],
                        "score": json.loads(answer[4]),
                        "questions1": questions_list_1,
                        "questions2": questions_list_2,
                        "questions3": questions_list_3
                        })
                # print(questions_db)
                questions = []
                for question in questions_db:
                    question_dict = {
                        "id": question[0],
                        "question": question[1],
                        "correct_answer": question[2],
                        "a2": question[3],
                        "a3": question[4],
                        "a4": question[5],
                        "difficulty": question[6]
                    }
                    questions.append(question_dict)

                # Prizes
                mycursor.execute("SELECT * FROM prizes")
                result = mycursor.fetchall()
                # mycursor.close()
                mydb.close()
                prizes = list()
                for res in result:
                    prizes.append({"id": res[0], "prize_name": res[1], "prize_information": res[2], "prize_image": res[4]})

                return {"questions": questions, "answered": answered, "prizes": prizes}
            except mysql.connector.Error:
                print("MySQL error")
                try:
                    msg = Message(
                        "Quiz, Hana Hegerova. Error.",
                        sender="hanahegerovaquiz@gmail.com",
                        recipients=["stranava.david@gmail.com"]
                    )
                    mail_global.send(msg)
                except SMTPException:
                    print("You are screwed, the email aren't working")
                return {"message": "Error"}
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def post(self):
        args = create_question_args.parse_args()
        if args["token"] == api_token:
            try:
                mydb, mycursor = get_connection()
                mycursor.execute("SELECT question FROM questions")
                question_names_db = mycursor.fetchall()
                for question in question_names_db:
                    if question[0] == args["question"]:
                        return {"message": "This question already exists"}
                question_replaced = args["question"].replace("\"", "\'")
                mycursor.execute("INSERT INTO questions (question, a_right, a2, a3, a4, difficulty) VALUES (%s, %s, %s, %s, %s, %s)",
                                 (question_replaced, args["correct_answer"], args["a2"], args["a3"], args["a4"], args["difficulty"]))
                mydb.commit()
                # mycursor.close()
                mydb.close()
                return {
                    "question": args["question"],
                    "correct_answer": args["correct_answer"]
                }
            except mysql.connector.Error:
                print("MySQL error")
                try:
                    msg = Message(
                        "Quiz, Hana Hegerova. Error.",
                        sender="hanahegerovaquiz@gmail.com",
                        recipients=["stranava.david@gmail.com"]
                    )
                    mail_global.send(msg)
                except SMTPException:
                    print("You are screwed, the email aren't working")
                return {"message": "Error"}
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def put(self):
        args = update_question_args.parse_args()
        if args["token"] == api_token:
            try:
                mydb, mycursor = get_connection()
                sql = "DELETE FROM questions WHERE id = %s"
                mycursor.execute(sql, (int(args["id"]),))
                mydb.commit()
                mycursor.execute(
                    "INSERT INTO questions (question, a_right, a2, a3, a4, difficulty) VALUES (%s, %s, %s, %s, %s, %s)",
                    (args["question"], args["correct_answer"], args["a2"], args["a3"], args["a4"], args["difficulty"]))
                mydb.commit()
                # mycursor.close()
                mydb.close()
                return {
                    "message": "Question was updated",
                    "question": args["question"],
                    "right_answer": args["correct_answer"],
                    "difficulty": args["difficulty"]
                }
            except mysql.connector.Error:
                print("MySQL error")
                try:
                    msg = Message(
                        "Quiz, Hana Hegerova. Error.",
                        sender="hanahegerovaquiz@gmail.com",
                        recipients=["stranava.david@gmail.com"]
                    )
                    mail_global.send(msg)
                except SMTPException:
                    print("You are screwed, the email aren't working")
                return {"message": "Error"}
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def delete(self):
        args = delete_question_args.parse_args()
        if args["token"] == api_token:
            try:
                mydb, mycursor = get_connection()
                mycursor.execute("DELETE FROM questions WHERE id = %s", (args["id"],))
                mydb.commit()
                # mycursor.close()
                mdyb.close()
                return {
                    "message": "Question was deleted"
                }
            except mysql.connector.Error:
                print("MySQL error")
                try:
                    msg = Message(
                        "Quiz, Hana Hegerova. Error.",
                        sender="hanahegerovaquiz@gmail.com",
                        recipients=["stranava.david@gmail.com"]
                    )
                    mail_global.send(msg)
                except SMTPException:
                    print("You are screwed, the email aren't working")
                return {"message": "Error"}
        else:
            return {
                "message": "Wrong token"
            }
