from flask import Flask
from flask_restful import Api
import mysql.connector
from pkg.config import config
from flask_cors import CORS
from flask_mail import Mail

api_token = config["api_token"]
admin_email = config["email"]
admin_password = config["password"]
db_password = config["db_password"]
mail_global = ""

mydb = mysql.connector.connect(
    host="192.46.233.86",
    user="root",
    passwd=db_password,
    database="majkoponist"
)
mycursor = mydb.cursor()


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = 'hanahegerovaquiz@gmail.com'
    app.config['MAIL_PASSWORD'] = '8JxYXY^mDVfrN1'
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True
    mail = Mail(app)
    global mail_global
    mail_global = mail

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

    from pkg.prize.routes import Prizes
    api.add_resource(Prizes, "/prizes")

    from pkg.testfolder.routes import Test
    api.add_resource(Test, "/test")

    return api
