from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from pkg import api_token, admin_email, admin_password
import mysql.connector

validate_admin = reqparse.RequestParser()
validate_admin.add_argument("email", type=str, help="Admin email")
validate_admin.add_argument("password", type=str, help="Admin password")
validate_admin.add_argument("token", type=str, help="API token")


class ValidateAdmin(Resource):
    @cross_origin(supports_credentials=True)
    def post(self):
        args = validate_admin.parse_args()
        if args["token"] == api_token:
            if args["email"] == admin_email and args["password"] == admin_password:  # If form data from web is correct
                return {"message": "login approved"}  # DON'T CHANGE THE MESSAGE. IT'S USED IN FE CODE
            else:
                return {"message": "Credentials were incorrect"}
        else:
            return {"message": "Wrong token"}
