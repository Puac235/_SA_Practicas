'''

    Práctica 2 Parte 1
    Creación y validación de JWT

    José Francisco Puac Ixcamparic
    201700342

'''

# Librerías a utilizar en la práctica
import base64, json

# Diccionario de secrets. Se almacenan por carnet y sólamente en memoria
secrets = {}

# Método de creación de JSON Web Token
def createJWT():
    global secrets
    # Ingreso de datos principales para el Payload (Carnet y Nombre)
    print('''Ingresar Carnet:''')
    carnet = input()
    print('''Ingresar Nombre:''')
    name = input()

    # Creación del header de JWT
    headerMsg = '''{"alg":"HS256","typ":"JWT"}'''
    urlSafeEncodedheader = base64.urlsafe_b64encode(headerMsg.encode("utf-8"))
    headerB64 = str(urlSafeEncodedheader, "utf-8")

    # Creación del Payload de JWT con los datos ingresados
    payloadMsg = '{"carnet":' + carnet + ',"nombre":"' + name + '"}'
    urlSafeEncodedpaypoad = base64.urlsafe_b64encode(payloadMsg.encode("utf-8"))
    payloadB64 = str(urlSafeEncodedpaypoad, "utf-8")

    # Creación del secret que se genera con el carnet
    secretMsg = carnet + 'secretcode'
    urlSafeEncodedsecret = base64.urlsafe_b64encode(secretMsg.encode("utf-8"))
    secretB64 = str(urlSafeEncodedsecret, "utf-8")

    # Se ingresa el secret al diccionario de secrets en memoria, anclándolo con el carnet ingresado
    secrets[carnet] = secretB64

    # Se visualiza el JWT
    print(headerB64 + '.' + payloadB64 + '.' + secretB64)

# Método de validación de JWT
def validateJWT():
    global secrets
    # Ingreso de JWT
    print('''Ingresar JWT:''')
    jwt = input()

    # Desglose del JWT
    data = jwt.split('.')
    # Decodificación del Payload
    decodedData = base64.urlsafe_b64decode(data[1])
    decodedStr = str(decodedData, "utf-8")

    # Convertir en JSON la información desencriptada del Payload
    jsonPayload = json.loads(decodedStr)
    try:
        # Creación del header de JWT provisional
        headerMsg = '''{"alg":"HS256","typ":"JWT"}'''
        urlSafeEncodedheader = base64.urlsafe_b64encode(headerMsg.encode("utf-8"))
        headerB64 = str(urlSafeEncodedheader, "utf-8")

        # Creación del Payload de JWT provisional
        urlSafeEncodedpaypoad = base64.urlsafe_b64encode(decodedStr.encode("utf-8"))
        payloadB64 = str(urlSafeEncodedpaypoad, "utf-8")

        # Creación del JWT provisional utilizando el secret almacenado en memoria teniendo como clave el carnet
        newJWT = headerB64 + '.' + payloadB64 + '.' + secrets[str(jsonPayload["carnet"])]

        if newJWT == jwt:
            print('TOKEN VÁLIDO')
        else:
            print('TOKEN NO VÁLIDO')

    except:
        # Si el carnet no existe en el diccionario de secrets, se muestra un aviso de que no existe en memoria
        print("NO EXISTE EL SECRET ASOCIADO EN MEMORIA.")

# Menu de la aplicación
def menu():
    # Ingreso de la opción a realizar
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
    
# Método para salir del sistema
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
print('''Bienvenido al validador JWT''')
menu()