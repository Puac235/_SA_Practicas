import base64, json

secrets = {}

def createJWT():
    global secrets
    print('''Ingresar Carnet:''')
    carnet = input()
    print('''Ingresar Nombre:''')
    name = input()

    headerMsg = '''{"alg":"HS256","typ":"JWT"}'''
    urlSafeEncodedheader = base64.urlsafe_b64encode(headerMsg.encode("utf-8"))
    headerB64 = str(urlSafeEncodedheader, "utf-8")

    payloadMsg = '{"carnet":' + carnet + ',"nombre":"' + name + '"}'
    urlSafeEncodedpaypoad = base64.urlsafe_b64encode(payloadMsg.encode("utf-8"))
    payloadB64 = str(urlSafeEncodedpaypoad, "utf-8")

    secretMsg = carnet + 'secretcode'
    urlSafeEncodedsecret = base64.urlsafe_b64encode(secretMsg.encode("utf-8"))
    secretB64 = str(urlSafeEncodedsecret, "utf-8")

    secrets[carnet] = secretB64

    print(headerB64 + '.' + payloadB64 + '.' + secretB64)

def validateJWT():
    global secrets
    print('''Ingresar JWT:''')
    jwt = input()

    data = jwt.split('.')
    decodedData = base64.urlsafe_b64decode(data[1])
    decodedStr = str(decodedData, "utf-8")

    jsonPayload = json.loads(decodedStr)
    try:
        headerMsg = '''{"alg":"HS256","typ":"JWT"}'''
        urlSafeEncodedheader = base64.urlsafe_b64encode(headerMsg.encode("utf-8"))
        headerB64 = str(urlSafeEncodedheader, "utf-8")

        urlSafeEncodedpaypoad = base64.urlsafe_b64encode(decodedStr.encode("utf-8"))
        payloadB64 = str(urlSafeEncodedpaypoad, "utf-8")

        newJWT = headerB64 + '.' + payloadB64 + '.' + secrets[str(jsonPayload["carnet"])]

        if newJWT == jwt:
            print('TOKEN VÁLIDO')
        else:
            print('TOKEN NO VÁLIDO')

    except:
        print("NO EXISTE EL SECRET ASOCIADO EN MEMORIA.")

def menu():
    print('''Seleccione la operación a realizar:
1. Crear JWT
2. Validar JWT''')
    option = input()
    if option == "1":
        createJWT()
    elif option == "2":
        validateJWT()
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

print('''Bienvenido al validador JWT''')
menu()