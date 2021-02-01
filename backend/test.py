import mysql.connector
import json

mydb = mysql.connector.connect(
    host="192.46.233.86",
    user="root",
    passwd="<Code><Tech> 127521",
    database="majkoponist"
)

first_json = {"questions1": {"How muchen tuchen 1": {"difficulty": 1, "user_answer": "user_answer1", "correct_answer": "correct_answer1", "correct": "No"},
                             "How muchen tuchen 2": {"difficulty": 2, "user_answer": "user_answer2", "correct_answer": "correct_answer2", "correct": "No"},
                             "How muchen tuchen 3": {"difficulty": 3, "user_answer": "user_answer3", "correct_answer": "correct_answer3", "correct": "No"},
                             }, "questions2": {}, "questions3": {}}
mycursor = mydb.cursor()
data = ("emailemailemailemail@mail.com", "Pepa z Depa", "+421 moje cislo", json.dumps({"score1": 0.8, "score2": 0, "score3": 0}), json.dumps(first_json), 1, json.dumps({"prize_name": "Moje vyhra kamarati", "information": "This information is meine information"}))

sql = "INSERT INTO answered (email, name, phone_number, score, answers, answered, prize) VALUES (%s, %s, %s, %s, %s, %s, %s)"
mycursor.execute(sql, data)
mydb.commit()

data_second = (json.dumps({"How muchen tuchen 21": {"difficulty": 1, "user_answer": "user_answer1", "correct_answer": "correct_answer1", "correct": "No"},
                             "How muchen tuchen 22": {"difficulty": 2, "user_answer": "user_answer2", "correct_answer": "correct_answer2", "correct": "No"},
                             "How muchen tuchen 23": {"difficulty": 3, "user_answer": "user_answer3", "correct_answer": "correct_answer3", "correct": "No"},
                             }),)
sql_update = "UPDATE answered SET answers = JSON_SET(answers, '$.questions2', %s) WHERE email = 'emailemailemailemail@mail.com'"
mycursor.execute(sql_update, data_second)
mydb.commit()

# mycursor.execute(sql, data)
# mydb.commit()

mycursor.execute("SELECT * FROM answered WHERE email = %s", ("emailemail@mail.com",))
res = mycursor.fetchone()
print(res)