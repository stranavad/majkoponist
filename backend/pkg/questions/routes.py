from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask_mail import Message
from pkg import mycursor, mydb, api_token, mail_global
import random
import json


def create_dict(diff):
    res = dict()
    while len(res) <= 4:
        question = random.choice(diff)
        diff.remove(question)
        question_dict = dict()
        question_dict["id"] = question[0]
        question_dict["question"] = question[1]
        question_dict["a1"] = question[2]
        question_dict["a2"] = question[3]
        question_dict["a3"] = question[4]
        question_dict["a4"] = question[5]
        question_dict["difficulty"] = question[6]
        res[question[0]] = question_dict
    return res


def sort_questions(all_questions):
    question_return = []
    for j in all_questions:
        added = 0
        while added <= 6:
            question = random.choice(j)
            j.remove(question)
            answers = [question[2], question[3], question[4], question[5]]
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
    correct_answers = dict()
    for question_id in question_ids:
        mycursor.execute("SELECT * FROM questions WHERE id = %s", (int(question_id),))
        res = mycursor.fetchone()
        correct_answers[question_id] = {
            "id": question_id,
            "question": res[1],
            "correct_answer": res[2],
            "difficulty": res[6]
        }

    return correct_answers


def sum_of_list(num_list):
    num_sum = 0
    for num in num_list:
        num_sum += num
    return num_sum


def send_email(email_scheme, email, first_name, last_name, phone_number):
    msg = Message(
        "Dalsi vyherce kvizu Hany Hegerovej",
        sender="hanahegerovaquiz@gmail.com",
        recipients=["mr.ajemifajn@protonmail.com"]
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
    mail_global.send(msg)


def add_result(email, name, phone_number, answers_scheme, average):
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


def make_average(scheme):
    diff1 = []
    diff2 = []
    diff3 = []
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
        else:
            print("There was some error in the average section")
    diff1_avg = sum_of_list(diff1) / len(diff1)
    diff2_avg = sum_of_list(diff2) / len(diff2)
    diff3_avg = sum_of_list(diff3) / len(diff3)
    avg = (diff1_avg + diff2_avg * 2 + diff3_avg * 3) / 6  # 10 is the number of nums, 1+2+3+4
    return avg


check_answers_args = reqparse.RequestParser()
for ans in range(0, 20):  # TODO edit to number of questions, now 1, 2, 3
    id_comb = "id-" + str(ans)
    check_answers_args.add_argument(str(ans), type=str, help="Combo of id and answer in type id^^answer", required=True)
check_answers_args.add_argument("token", type=str, help="API token")

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
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 1")
            diff_one = mycursor.fetchall()
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 2")
            diff_two = mycursor.fetchall()
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 3")
            diff_three = mycursor.fetchall()
            questions_list = sort_questions([diff_one, diff_two, diff_three])
            # TODO something to do with quotes in JSON, now in database single quotes - try back double
            return {"questions": questions_list}
        else:
            return {
                "message": "Wrong token"
            }

    # Sending answered questions to backend and returning average and scheme
    @cross_origin(supports_credentials=True)
    def post(self):
        args = answer_args.parse_args()
        if args["token"] == api_token:
            answers = dict()
            for arg in args["answers"]:
                arg = arg.replace("\'", "\"")
                obj = json.loads(arg)
                answers[int(obj['id'])] = obj['answer']
            question_ids = []
            for question_id in answers:
                question_ids.append(question_id)
            correct_answers = get_correct_answers(question_ids)
            answers_scheme = list()
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
            average = make_average(answers_scheme)
            add_result(args["email"], args["name"], args["phone_number"], answers_scheme, average)
            result = {
                "average": str(int(average * 100)) + "%",
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
