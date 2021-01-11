from flask import Flask
from flask_restful import Api
import mysql.connector

mydb = mysql.connector.connect(
    host="192.46.233.86",
    user="root",
    passwd="<Code><Tech> 127521",
    database="majkoponist"
)
mycursor = mydb.cursor()

def create_app():
    app = Flask(__name__)

    return app


def create_api(app):
    api = Api(app)

    from pkg.users.routes import Users
    api.add_resource(Users, "/users")

    return api
