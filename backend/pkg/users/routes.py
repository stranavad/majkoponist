from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from pkg import mycursor, mydb, api_token

add_user_args = reqparse.RequestParser()
add_user_args.add_argument("user_email", type=str, help="User email")
add_user_args.add_argument("user_phone_number", type=str, help="User phone number")
add_user_args.add_argument("first_name", type=str, help="User first name")
add_user_args.add_argument("last_name", type=str, help="User second name")
add_user_args.add_argument("token", type=str, help="API token")

token_parser = reqparse.RequestParser()
token_parser.add_argument("token", type=str, help="API token")


class Users(Resource):
    # Getting users for displaying somewhere. NEVER USED
    @cross_origin(supports_credentials=True)
    def get(self):
        token_arg = token_parser.parse_args()
        if token_arg["token"] == api_token:
            mycursor.execute("SELECT * FROM users")
            users_db = mycursor.fetchall()
            users = dict()
            for user in users_db:
                users[user[0]] = {
                    "first_name": user[1],
                    "last_name": user[2],
                    "phone_number": user[3]
                }
            return {
                "count": len(users),
                "users": users
            }
        else:
            return {
                "message": "Wrong token"
            }

    # Registering/Creating new user
    @cross_origin(supports_credentials=True)
    def post(self):
        args = add_user_args.parse_args()
        if args["token"] == api_token:
            mycursor.execute("SELECT email FROM users")
            existing_emails_db = mycursor.fetchall()
            existing_emails = []
            for email in existing_emails_db:  # Email from db to list
                existing_emails.append(email[0])
            if args["user_email"] in existing_emails:  # Checking if email is in db already
                return {"message": "This email already exist"}
            mycursor.execute("INSERT INTO users (email, first_name, last_name, phone_number) VALUES (%s, %s, %s, %s)",
                             (args["user_email"], args["first_name"], args["last_name"], args["user_phone_number"]))
            mydb.connect().commit()
            return {
                "email": args["user_email"],
                "first_name": args["first_name"],
                "last_name": args["last_name"],
                "phone_number": args["user_phone_number"]
            }
        else:
            return {
                "message": "Wrong token"
            }
