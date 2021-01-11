from flask import render_template, redirect, request, url_for, jsonify
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_cors import CORS, cross_origin
from pkg import mycursor, mydb
import random

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

def sum_of_list(list):
    sum = 0
    for l in list:
        sum += l
    return sum

def make_average(scheme):
    diff1 = []
    diff2 = []
    diff3 = []
    diff4 = []
    for q in scheme:
        if scheme[q]["difficulty"] == 1:
            diff1.append(scheme[q]["correct"])
        elif scheme[q]["difficulty"] == 2:
            diff2.append(scheme[q]["correct"])
        elif scheme[q]["difficulty"] == 3:
            diff3.append(scheme[q]["correct"])
        elif scheme[q]["difficulty"] == 4:
            diff4.append(scheme[q]["correct"])
        else:
            print("There was some error in the average section")
    diff1_avg = sum_of_list(diff1) / len(diff1)
    diff2_avg = sum_of_list(diff2) / len(diff2)
    diff3_avg = sum_of_list(diff3) / len(diff3)
    diff4_avg = sum_of_list(diff4) / len(diff4)
    avg = (diff1_avg + diff2_avg * 2 + diff3_avg * 3 + diff4_avg * 4) / 10  # 10 is the number of nums, 1+2+3+4
    return avg


check_answers_args = reqparse.RequestParser()
for ans in range(1, 5): # TODO edit to number of questions, now 1, 2, 3
    id_comb = "id-" + str(ans)
    check_answers_args.add_argument(id_comb, type=str, help="Combo of id and answer in type id^^answer", required=True)


class Users(Resource):
    @cross_origin(supports_credentials=True)
    def get(self):
        mycursor.execute("SELECT * FROM questions WHERE difficulty = 1")
        diff_one = mycursor.fetchall()
        mycursor.execute("SELECT * FROM questions WHERE difficulty = 2")
        diff_two = mycursor.fetchall()
        mycursor.execute("SELECT * FROM questions WHERE difficulty = 3")
        diff_three = mycursor.fetchall()
        mycursor.execute("SELECT * FROM questions WHERE difficulty = 4")
        diff_four = mycursor.fetchall()
        dict_one = create_dict(diff_one)
        dict_two = create_dict(diff_two)
        dict_three = create_dict(diff_three)
        dict_four = create_dict(diff_four)
        res = {
            "d-1": dict_one,
            "d-2": dict_two,
            "d-3": dict_three,
            "d-4": dict_four
        }
        return res
    
    @cross_origin(supports_credentials=True)
    def post(self):
        args = check_answers_args.parse_args()
        answers = dict()
        for arg in args:
            arg_values = args[arg]
            question_id, answer = arg_values.strip().split("^^")
            answers[int(question_id)] = answer
        question_ids = []
        for question_id in answers:
            question_ids.append(question_id)
        correct_answers = get_correct_answers(question_ids)
        answers_scheme = dict()
        for answer in answers:
            correct = 0
            if answers[answer] == correct_answers[answer]["correct_answer"]:
                correct = 1
            answers_scheme[answer] = {
                "question": correct_answers[answer]["question"],
                "difficulty": correct_answers[answer]["difficulty"],
                "correct_answer": correct_answers[answer]["correct_answer"],
                "user_answer": answers[answer],
                "correct": correct
            }
        average = make_average(answers_scheme)

        result = {
            "average": str(average * 100) + "%",
            "scheme": answers_scheme
        }
        return result
