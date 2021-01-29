from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from pkg import mycursor, mydb, api_token
import random

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
            mycursor.execute("SELECT * FROM questions")
            questions_db = mycursor.fetchall()
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
            return {"questions": questions}
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def post(self):
        args = create_question_args.parse_args()
        if args["token"] == api_token:
            mycursor.execute("SELECT question FROM questions")
            question_names_db = mycursor.fetchall()
            for question in question_names_db:
                if question[0] == args["question"]:
                    return {"message": "This question already exists"}
            question_replaced = args["question"].replace("\"", "\'")
            mycursor.execute("INSERT INTO questions (question, a_right, a2, a3, a4, difficulty) VALUES (%s, %s, %s, %s, %s, %s)",
                             (question_replaced, args["correct_answer"], args["a2"], args["a3"], args["a4"], args["difficulty"]))
            mydb.commit()
            return {
                "question": args["question"],
                "correct_answer": args["correct_answer"]
            }
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def put(self):
        args = update_question_args.parse_args()
        if args["token"] == api_token:
            print(args)
            sql = "DELETE FROM questions WHERE id = %s"
            mycursor.execute(sql, (int(args["id"]),))
            mydb.commit()
            mycursor.execute(
                "INSERT INTO questions (question, a_right, a2, a3, a4, difficulty) VALUES (%s, %s, %s, %s, %s, %s)",
                (args["question"], args["correct_answer"], args["a2"], args["a3"], args["a4"], args["difficulty"]))
            mydb.commit()
            return {
                "message": "Question was updated",
                "question": args["question"],
                "right_answer": args["correct_answer"],
                "difficulty": args["difficulty"]
            }
        else:
            return {
                "message": "Wrong token"
            }

    @cross_origin(supports_credentials=True)
    def delete(self):
        args = delete_question_args.parse_args()
        if args["token"] == api_token:
            mycursor.execute("DELETE FROM questions WHERE id = %s", (args["id"],))
            mydb.commit()
            return {
                "message": "Question was deleted"
            }
        else:
            return {
                "message": "Wrong token"
            }
