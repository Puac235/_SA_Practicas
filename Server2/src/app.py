#!flask/bin/python
from flask import Flask
from flask import request
from flask import jsonify
from flask_socketio import SocketIO, send
from flask_cors import CORS
import boto3
import base64
import json
from pymongo import MongoClient
from bson.objectid import ObjectId 
import os
from datetime import datetime
import requests
import random



app = Flask(__name__)
CORS(app)
socket = SocketIO(app, cors_allowed_origins="*")



@app.route('/', methods = ['GET'])
def index():
    return "Hello, World Names!"

@app.route('/getName', methods = ['GET'])
def getName():
    
    nombre = 'nombre' + str(random.randint(0, 10000))
    user = 'usuario' + str(random.randint(0, 10000))

    return {'status':True, 'nombre': nombre, 'user': user}


if __name__ == '__main__':
    socket.run(app, host='0.0.0.0', port=80)
