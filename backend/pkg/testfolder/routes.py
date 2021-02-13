from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask_mail import Message
from flask import url_for, request
from pkg import mycursor, mydb, api_token, mail_global
import random
import json


test_args = reqparse.RequestParser()
test_args.add_argument("image")

class Test(Resource):
    @cross_origin(supports_credentials=True)
    def post(self):
        file = request.files['file']
        print(file)
        # args = test_args.parse_args()
        print(args)
        return '<img src=' + url_for('static',filename='keytron_code.png') + '>'
