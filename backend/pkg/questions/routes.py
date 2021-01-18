from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from pkg import mycursor, mydb, api_token
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
        while added <= 4:
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


def make_average(scheme):
    diff1 = []
    diff2 = []
    diff3 = []
    diff4 = []
    for q in scheme:
        if q["difficulty"] == 1:
            diff1.append(q["correct"])
        elif q["difficulty"] == 2:
            diff2.append(q["correct"])
        elif q["difficulty"] == 3:
            diff3.append(q["correct"])
        elif q["difficulty"] == 4:
            diff4.append(q["correct"])
        else:
            print("There was some error in the average section")
    diff1_avg = sum_of_list(diff1) / len(diff1)
    diff2_avg = sum_of_list(diff2) / len(diff2)
    diff3_avg = sum_of_list(diff3) / len(diff3)
    diff4_avg = sum_of_list(diff4) / len(diff4)
    avg = (diff1_avg + diff2_avg * 2 + diff3_avg * 3 + diff4_avg * 4) / 10  # 10 is the number of nums, 1+2+3+4
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
answer_args.add_argument("token", type=str, help="API token")


class Questions(Resource):
    # Get questions to web browser
    @cross_origin(supports_credentials=True)
    def get(self):
        token_arg = token_parser.parse_args()
        print(token_arg)
        print(api_token)
        if token_arg["token"] == api_token:
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 1")
            diff_one = mycursor.fetchall()
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 2")
            diff_two = mycursor.fetchall()
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 3")
            diff_three = mycursor.fetchall()
            mycursor.execute("SELECT * FROM questions WHERE difficulty = 4")
            diff_four = mycursor.fetchall()
            # dict_one = create_dict(diff_one)
            # dict_two = create_dict(diff_two)
            # dict_three = create_dict(diff_three)
            # dict_four = create_dict(diff_four)
            mycursor.execute("SELECT * FROM questions")
            questions_db = mycursor.fetchall()
            res = []
            questions_list = sort_questions([diff_one, diff_two, diff_three, diff_four])
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
                correct = 0
                if answers[answer] == correct_answers[answer]["correct_answer"]:
                    correct = 1
                answers_scheme.append({
                    "question": correct_answers[answer]["question"],
                    "difficulty": correct_answers[answer]["difficulty"],
                    "correct_answer": correct_answers[answer]["correct_answer"],
                    "user_answer": answers[answer],
                    "correct": correct,
                    "id": answer
                })
            average = make_average(answers_scheme)
            answer_scheme_return = list()
            for scheme in answers_scheme:
                correct = "No"
                if scheme['correct'] == 1:
                    correct = "Yes"
                answer_scheme_return.append({
                    "question": scheme["question"],
                    "difficulty": scheme["difficulty"],
                    "correct_answer": scheme["correct_answer"],
                    "user_answer": scheme["user_answer"],
                    "correct": correct,
                    "id": scheme["id"]
                })
            result = {
                "average": str(int(average * 100)) + "%",
                "scheme": answer_scheme_return
            }
            return result
        else:
            return {
                "message": "Wrong token"
            }
