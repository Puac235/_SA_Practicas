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



app = Flask(__name__)
CORS(app)
socket = SocketIO(app, cors_allowed_origins="*")

myclient = MongoClient('mongodb://52.91.148.92:27017/',username = 'puac', password = '1234' )
mydb = myclient["dbSA"]



@app.route('/', methods = ['GET'])
def index():
    return "Hello, World!"

@app.route('/reset', methods = ['GET'])
def reset():
    
    conection = mydb["usuarios"]
    conection.drop()

    return "Reset Successfully"

@app.route('/getUsers', methods = ['GET'])
def getUsers():
    conection = mydb["usuarios"]
    data = conection.find()
    salida = {'status':True, 'data':[]}
    for x in data:
        dato = {'id':str(x['_id']),'nombre': x['nombre'], 'user':x['user']}
        salida['data'].append(dato)
    return salida

@app.route('/addUser', methods = ['POST'])
def addUser():
    conection = mydb["usuarios"]
    response = requests.get('http://52.91.148.92:3000/getName')
    responsel = json.loads(response.text)
    datos = json.loads(request.data)

    datos['nombre'] = responsel['nombre']
    datos['user'] = responsel['user']

    x = conection.insert_one(datos)

    
    return {'status':True, 'id': str(x.inserted_id), 'nombre': datos['nombre'], 'user': datos['user']}

if __name__ == '__main__':
    socket.run(app, host='0.0.0.0', port=80)
