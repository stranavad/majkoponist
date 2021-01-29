import mysql.connector
import random

mydb = mysql.connector.connect(
    host="192.46.233.86",
    user="root",
    passwd="<Code><Tech> 127521",
    database="majkoponist"
)
mycursor = mydb.cursor()


def sort_questions(all_questions):
    question_return = []
    for j in all_questions:
        print(len(j))
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


def select():
    mycursor.execute("SELECT * FROM questions WHERE difficulty = 1")
    diff_one = mycursor.fetchall()
    mycursor.execute("SELECT * FROM questions WHERE difficulty = 2")
    diff_two = mycursor.fetchall()
    mycursor.execute("SELECT * FROM questions WHERE difficulty = 3")
    diff_three = mycursor.fetchall()
    questions_list = sort_questions([diff_one, diff_two, diff_three])
    print(questions_list)

select()