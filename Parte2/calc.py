import requests
import xmltodict, json

url="http://www.dneonline.com/calculator.asmx"
headers = {'content-type': 'application/soap+xml'}

def AddResponse(intA, intB):
    global url, headers
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Add xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Add>
            </soap12:Body>
            </soap12:Envelope>"""

    response = requests.post(url,data=body,headers=headers)
    obj = xmltodict.parse(response.content)
    print('La respuesta de la operacion '+ str(intA) + ' + ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["AddResponse"]["AddResult"]).replace('"',''))

def SubstractResponse(intA, intB):
    global url, headers
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Subtract xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Subtract>
            </soap12:Body>
            </soap12:Envelope>"""

    response = requests.post(url,data=body,headers=headers)
    obj = xmltodict.parse(response.content)
    print('La respuesta de la operacion '+ str(intA) + ' - ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["SubtractResponse"]["SubtractResult"]).replace('"',''))

def MultiplyResponse(intA, intB):
    global url, headers
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Multiply xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Multiply>
            </soap12:Body>
            </soap12:Envelope>"""

    response = requests.post(url,data=body,headers=headers)
    obj = xmltodict.parse(response.content)
    print('La respuesta de la operacion '+ str(intA) + ' * ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["MultiplyResponse"]["MultiplyResult"]).replace('"',''))

def DivideResponse(intA, intB):
    global url, headers
    body = """<?xml version="1.0" encoding="utf-8"?>
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
            <Divide xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
            </Divide>
        </soap12:Body>
        </soap12:Envelope>"""

    response = requests.post(url,data=body,headers=headers)
    obj = xmltodict.parse(response.content)
    print('La respuesta de la operacion '+ str(intA) + ' / ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["DivideResponse"]["DivideResult"]).replace('"',''))

def menu():
    print('''Seleccione la operación a realizar:
1. Suma
2. Resta
3. Multiplicación
4. División''')
    option = input()
    print('Ingrese el primer número:')
    intA = input()
    print('Ingrese el segundo número:')
    intB = input()
    if option == "1":
        AddResponse(intA, intB)
    elif option == "2":
        SubstractResponse(intA, intB)
    elif option == "3":
        MultiplyResponse(intA, intB)
    elif option == "4":
        DivideResponse(intA, intB)
    else:
        print("DEBE SELECCIONAR UNA OPERACIÓN VÁLIDA.")
        menu()
    toExit()
    
def toExit():
    print("Desea realizar otra operación? (Y/N)")
    ext = input()
    if ext == "Y":
        menu()
    elif ext == "N":
        exit()
    else:
        print("DEBE SELECCIONAR UNA OPCIÓN VÁLIDA.")
        toExit()

print('''Bienvenido a la calculadora SOAP''')
menu()