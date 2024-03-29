from flask import Flask
from flask_restful import Api
import mysql.connector
from pkg.config import config
from flask_cors import CORS
from flask_mail import Mail
# from flaskext.mysql import MySQL
# from flask_mysqlpool import MySQLPool

api_token = config["api_token"]
admin_email = config["email"]
admin_password = config["password"]
db_password = config["db_password"]
db_host = config["db_host"]
mail_global = ""
mail_to_send = config["mail_to_send"]
mail_password = config["mail_password"]
mycursor = ""


# Change the ip address to new mysql database

mydb = mysql.connector.connect(
    host=db_host,
    user="root",
    passwd=db_password,
    database="majkoponist",
    pool_name="batman",
    pool_size=5
)


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = 'hanahegerovaquiz@gmail.com'
    app.config['MAIL_PASSWORD'] = mail_password
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True
    app.config['SECRET_KEY'] = "MajkoPonistSecretKey"

    mail = Mail(app)
    global mail_global
    mail_global = mail

    return app


def get_connection():
    db = mysql.connector.connect(pool_name = "batman")
    return db, db.cursor()


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


    return api
