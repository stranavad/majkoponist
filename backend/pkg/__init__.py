from flask import Flask
from flask_restful import Api
import mysql.connector
from pkg.config import config
from flask_cors import CORS

api_token = config["api_token"]
admin_email = config["email"]
admin_password = config["password"]

mydb = mysql.connector.connect(
    host="192.46.233.86",
    user="root",
    passwd="<Code><Tech> 127521",
    database="majkoponist"
)
mycursor = mydb.cursor()


def create_app():
    app = Flask(__name__)
    CORS(app)

    return app


def create_api(app):
    api = Api(app)

    from pkg.questions.routes import Questions
    api.add_resource(Questions, "/questions")

    from pkg.users.routes import Users
    api.add_resource(Users, "/users")

    from pkg.admin.routes import Admin
    api.add_resource(Admin, "/admin")

    from pkg.validate_admin.routes import ValidateAdmin
    api.add_resource(ValidateAdmin, "/validate_admin")

    return api
