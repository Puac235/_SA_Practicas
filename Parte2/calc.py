'''

    Práctica 2 Parte 2
    Calculadora utilziando peticiones SOAP

    José Francisco Puac Ixcamparic
    201700342

'''

# Librerías a utilizar en la práctica
import requests, xmltodict, json

# URL de la API
url="http://www.dneonline.com/calculator.asmx"
# Headers necesarios para la petición
headers = {'content-type': 'application/soap+xml'}

# Método de suma de enteros
def AddResponse(intA, intB):
    global url, headers
    # cuerpo de la peticion SOAP de suma en xml, contiene los enteros recibidos en el método
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Add xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Add>
            </soap12:Body>
            </soap12:Envelope>"""

    # se realiza la petición SOAP
    response = requests.post(url,data=body,headers=headers)
    # Se obtiene el resultado de la petición y se parsea a diccionario
    obj = xmltodict.parse(response.content)
    # Visualización de resultado
    print('La respuesta de la operacion '+ str(intA) + ' + ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["AddResponse"]["AddResult"]).replace('"',''))

# Método de resta de enteros
def SubstractResponse(intA, intB):
    global url, headers
    # cuerpo de la peticion SOAP de resta en xml, contiene los enteros recibidos en el método
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Subtract xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Subtract>
            </soap12:Body>
            </soap12:Envelope>"""

    # se realiza la petición SOAP
    response = requests.post(url,data=body,headers=headers)
    # Se obtiene el resultado de la petición y se parsea a diccionario
    obj = xmltodict.parse(response.content)
    # Visualización de resultado
    print('La respuesta de la operacion '+ str(intA) + ' - ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["SubtractResponse"]["SubtractResult"]).replace('"',''))

# Método de multiplicación de enteros
def MultiplyResponse(intA, intB):
    global url, headers
    # cuerpo de la peticion SOAP de multiplicación en xml, contiene los enteros recibidos en el método
    body = """<?xml version="1.0" encoding="utf-8"?>
            <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
                <Multiply xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
                </Multiply>
            </soap12:Body>
            </soap12:Envelope>"""

    # se realiza la petición SOAP
    response = requests.post(url,data=body,headers=headers)
    # Se obtiene el resultado de la petición y se parsea a diccionario
    obj = xmltodict.parse(response.content)
    # Visualización de resultado
    print('La respuesta de la operacion '+ str(intA) + ' * ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["MultiplyResponse"]["MultiplyResult"]).replace('"',''))

# Método de división de enteros
def DivideResponse(intA, intB):
    global url, headers
    # cuerpo de la peticion SOAP de división en xml, contiene los enteros recibidos en el método
    body = """<?xml version="1.0" encoding="utf-8"?>
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
            <Divide xmlns="http://tempuri.org/">
                <intA>""" + str(intA) + """</intA>
                <intB>""" + str(intB) + """</intB>
            </Divide>
        </soap12:Body>
        </soap12:Envelope>"""

    # se realiza la petición SOAP
    response = requests.post(url,data=body,headers=headers)
    # Se obtiene el resultado de la petición y se parsea a diccionario
    obj = xmltodict.parse(response.content)
    # Visualización de resultado
    print('La respuesta de la operacion '+ str(intA) + ' / ' + str(intB) + ' es:')
    print(json.dumps(obj["soap:Envelope"]["soap:Body"]["DivideResponse"]["DivideResult"]).replace('"',''))

# Menu del programa
def menu():
    # Ingreso de la opción a realizar
    print('''Seleccione la operación a realizar:
1. Suma
2. Resta
3. Multiplicación
4. División''')
    option = input()
    # Ingreso de los números a operar
    print('Ingrese el primer número:')
    intA = input()
    print('Ingrese el segundo número:')
    intB = input()
    # Verificación de operación a realizar
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

# Método para salir del programa
def toExit():
    print("Desea realizar otra operación? (Y/N)")
    ext = input()
    # Ingresa nuevamente al menú
    if ext == "Y":
        menu()
    # Finaliza la ejecución del programa.
    elif ext == "N":
        exit()
    else:
        print("DEBE SELECCIONAR UNA OPCIÓN VÁLIDA.")
        toExit()

# Inicio del programa
print('''Bienvenido a la calculadora SOAP''')
menu()