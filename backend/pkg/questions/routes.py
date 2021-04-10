from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask_mail import Message
from pkg import api_token, mail_global, get_connection
import random
import json
import mysql.connector


def sort_questions(all_questions):
    # Create dictionary with 3 difficulties and 7 random questions from each difficulty
    question_return = []
    for j in all_questions:
        added = 0
        while added <= 6:
            question = random.choice(j)
            j.remove(question)
            answers = list(question[2:6])
            random.shuffle(answers)
            question_dict = {
                "id": question[0],
                "question": question[1],
                "a1": answers[0],
                "a2": answers[1],
                "a3": answers[2],
                "a4": answers[3],
                "difficulty": question[6]
            }
            question_return.append(question_dict)
            added += 1
    return question_return


def get_correct_answers(question_ids):
    # Getting correct_answers from database and creating datatype that we can work with
    try:
        mydb, mycursor = get_connection()
        correct_answers = dict()
        mycursor.execute("SELECT * FROM questions")
        correct_from_db = mycursor.fetchall()
        for question_id in question_ids:  # extremly slow to make that number of selects from DB, rewrite
            # mycursor.execute("SELECT * FROM questions WHERE id = %s", (int(question_id),))
            # res = mycursor.fetchone()
            for question in correct_from_db:
                if questions_id == question[0]:
                    correct_answers[question_id] = {
                        "id": question_id,
                        "question": question[1],
                        "correct_answer": question[2],
                        "difficulty": question[6]
                    }
                    break

        return correct_answers
        mycursor.close()
        mydb.close()
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

def sum_of_list(num_list):
    # Total sum of numbers in a list
    num_sum = 0
    for num in num_list:
        num_sum += num
    return num_sum


def send_email(email_scheme, email, first_name, last_name, phone_number):
    # Sending email with result to quiz admin
    msg = Message(
        "Dalsi vyherce kvizu Hany Hegerovej",
        sender="hanahegerovaquiz@gmail.com",
        recipients=["mr.ajemifajn@protonmail.com, stranava.david@gmail.com"]
    )

    msg_body = f"""
        User: {first_name} {last_name}.
        Email: {email}.
        Phone number: {phone_number}.

        """

    for answer in email_scheme:
        msg_body += (f"""
            Otazka: {answer["question"]}.
            Obtiznost: {answer["difficulty"]}.
            Odpoved uzivatele: {answer["user_answer"]}.
            Spravna odpoved: {answer["correct_answer"]}.
            Odpovedal spravne: {answer["correct"]}
            """)
    msg.body = msg_body
    try:
        mail_global.send(msg)
    except SMTPException:
        print("Some error when sending email")
        try:
            msg = Message(
                "Quiz, Hana Hegerova. Error.",
                sender="hanahegerovaquiz@gmail.com",
                recipients=["stranava.david@gmail.com"]
            )
            mail_global.send(msg)
        except SMTPException:
            print("You are screwed, the email aren't working")


def add_result(email, name, phone_number, answers_scheme, average):
    try:
        mydb, mycursor = get_connection()
        mycursor.execute("SELECT * FROM answered WHERE email = %s", (email,))
        res = mycursor.fetchall()
        questions_dict = dict()
        for question in answers_scheme:
            questions_dict[question["question"]] = {"difficulty": question["difficulty"], "user_answer": question["user_answer"], "correct_answer": question["correct_answer"], "correct": question["correct"]}

        if not res:
            data = (
                email,
                name,
                phone_number,
                json.dumps({"score1": average, "score2": 0, "score3": 0}),
                json.dumps({"questions1": questions_dict, "questions2": "", "questions3": ""}),
                1,
                json.dumps({"prize": "none"})
            )
            sql = "INSERT INTO answered (email, name, phone_number, score, answers, answered, prize) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            mycursor.execute(sql, data)
            mydb.commit()
        else:
            if res[0][6] == 1:
                sql = "UPDATE answered SET score = JSON_SET(score, '$.score2', %s) AND answers = JSON_SET(answers, '$.questions2', %s) AND answered = 2 WHERE email = %s"
                mycursor.execute(sql, (average, questions_dict, email))
                mydb.commit()
            elif res[0][6] == 2:
                sql = "UPDATE answered SET score = JSON_SET(score, '$.score3', %s) AND answers = JSON_SET(answers, '$.questions3', %s) AND answered = 2 WHERE email = %s"
                mycursor.execute(sql, (average, questions_dict, email))
                mydb.commit()
            else:
                print("You are stupid mate")
        mycursor.close()
        mydb.close()
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


def make_average(scheme):
    # Simple "algorithm" for making average from numbers with different "value"
    diff1, diff2, diff3 = [], [], []
    for q in scheme:
        if q["difficulty"] == 1:
            if q["correct"] == "Nie":
                diff1.append(0)
            else:
                diff1.append(1)
        elif q["difficulty"] == 2:
            if q["correct"] == "Nie":
                diff2.append(0)
            else:
                diff2.append(1)
        elif q["difficulty"] == 3:
            if q["correct"] == "Nie":
                diff3.append(0)
            else:
                diff3.append(1)
    diff1_avg = sum_of_list(diff1) / len(diff1)
    diff2_avg = sum_of_list(diff2) / len(diff2)
    diff3_avg = sum_of_list(diff3) / len(diff3)
    avg = (diff1_avg + diff2_avg * 2 + diff3_avg * 3) / 6
    return avg


token_parser = reqparse.RequestParser()
token_parser.add_argument("token", type=str, help="API token")

answer_args = reqparse.RequestParser()
answer_args.add_argument("answers", action="append")
answer_args.add_argument("email", type=str)
answer_args.add_argument("name", type=str)
answer_args.add_argument("phone_number", type=str)
answer_args.add_argument("token", type=str, help="API token")


class Questions(Resource):
    # Get questions to web browser
    @cross_origin(supports_credentials=True)
    def get(self):
        token_arg = token_parser.parse_args()
        if token_arg["token"] == api_token:
            try:
                mydb, mycursor = get_connection()
                mycursor.execute("SELECT * FROM questions")  # Getting all questions from DB
                result = mycursor.fetchall()
                mydb.close()

                df_one, df_two, df_three = [], [], []
                # Converting db result to lists by difficulty
                for question in result:
                    if question[6] == 1:
                        df_one.append(question)
                    elif question[6] == 2:
                        df_two.append(question)
                    elif question[6] == 3:
                        df_three.append(question)

                questions_list = sort_questions([df_one, df_two, df_three])  # Choosing 7 random question from each difficulty
                return {"questions": questions_list}
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

    # Sending answered questions to backend and returning average and scheme
    @cross_origin(supports_credentials=True)
    def post(self):
        args = answer_args.parse_args()
        if args["token"] == api_token:
            answers, question_ids, answers_scheme = dict(), [], []
            # Converting data from web to python dictionary
            for arg in args["answers"]:
                arg = arg.replace("\'", "\"")
                obj = json.loads(arg)
                answers[int(obj['id'])] = obj['answer']

            # Getting questions ids for checking answers
            for question_id in answers:
                question_ids.append(question_id)

            correct_answers = get_correct_answers(question_ids)
            if correct_answers == "error":
                return {"message": "Error"}

            # Converting data to display on web, with all of the items in question
            for answer in answers:
                correct = "Nie"
                if answers[answer] == correct_answers[answer]["correct_answer"]:
                    correct = "Ano"
                answers_scheme.append({
                    "question": correct_answers[answer]["question"],
                    "difficulty": correct_answers[answer]["difficulty"],
                    "correct_answer": correct_answers[answer]["correct_answer"],
                    "user_answer": answers[answer],
                    "correct": correct,
                    "id": answer
                })
            average = make_average(answers_scheme)  # Making result average
            add_result(args["email"], args["name"], args["phone_number"], answers_scheme, average)
            result = {
                "average": str(int(average * 100)) + "%",
                "average_raw": int(average),
                "scheme": answers_scheme,
                "winner": "false",
            }
            if average >= 0.8:
                result["winner"] = "true"
            return result
        else:
            return {
                "message": "Wrong token"
            }
