# [SA] Documentación de Uso Práctica 2

### Parte 1 (JWT)

Para utilizar la práctica es necesario realizar los siguientes pasos:

- Descargar Python 3.9 desde la página oficial. [Descargar Python](https://www.python.org/)
- Ingresar a su consola de preferencia (en este caso Visual Studio Code) y dirigirse a la ubicación del archivo "jwt.py".

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled.png)

- Descargar las librerías necesarias, en este caso son "base64 & json" (Puede que ya vengan instaladas por defecto)
- Ejecutar el archivo jwt.py. Esto se puede realizar utilizando el botón en VS Code en la esquina superior derecha, o bien ejecutando "python3 jwt.py"

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%201.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%201.png)

## Funcionalidades del Software

- Menú
1. Seleccionar la opción a realizar. Existen 2 opciones: Crear JWT y Validar JWT.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%202.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%202.png)

- Crear JWT
1. Seleccionar la opción (1).
2. Ingresar carnet.
3. Ingresar Nombre.
4. El programa te visualiza el JWT generado.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%203.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%203.png)

- Validar JWT
1. Seleccionar la opción (2).
2. Ingresar JWT
3. Si el JWT fue creado por el programa previamente, este lo desencriptará recibiendo el payload y en base al carnet desencriptado, buscar el secret almacenado en memoria, si existe generará un token provisional y lo compara con el ingresado, si coinciden se mostrará el mensaje "TOKEN VÁLIDO", en caso contrario, aparecerá el mensaje "TOKEN NO VÁLIDO"

Token Válido:

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%204.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%204.png)

Token No Válido:

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%205.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%205.png)

Tras finalizar cualquier operación, el programa pregunta si se quiere realizar una nueva operación o salir del sistema:

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%206.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%206.png)

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%207.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%207.png)

### Parte 2 (SOAP REQUESTS)

Para utilizar la práctica es necesario realizar los siguientes pasos:

- Descargar Python 3.9 desde la página oficial. [Descargar Python](https://www.python.org/)
- Ingresar a su consola de preferencia (en este caso Visual Studio Code) y dirigirse a la ubicación del archivo "calc.py".

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%208.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%208.png)

- Descargar las librerías necesarias, en este caso son "requests, xmltodict & json" (Puede que ya vengan instaladas por defecto)
- Ejecutar el archivo jwt.py. Esto se puede realizar utilizando el botón en VS Code en la esquina superior derecha, o bien ejecutando "python3 calc.py"

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%209.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%209.png)

## Funcionalidades del Software

- Menú
1. Seleccionar la opción a realizar. Existen 4 opciones: Sumar, Restar, Multiplicar y Dividir.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2010.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2010.png)

- Suma
1. Seleccionar la opción (1).
2. Ingresar los números enteros a sumar.
3. El programa te visualiza el resultado de la suma.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2011.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2011.png)

- Resta
1. Seleccionar la opción (2).
2. Ingresar los números enteros a restar.
3. El programa te visualiza el resultado de la resta.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2012.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2012.png)

- Multiplicación
1. Seleccionar la opción (3).
2. Ingresar los números enteros a multiplicar.
3. El programa te visualiza el resultado de la multiplicación.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2013.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2013.png)

- División
1. Seleccionar la opción (4).
2. Ingresar los números enteros a dividir.
3. El programa te visualiza el resultado de la división. Si la división resulta en un número decimal, lo trunca.

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2014.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2014.png)

Tras finalizar cualquier operación, el programa pregunta si se quiere realizar una nueva operación o salir del sistema:

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2015.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%2015.png)

![%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%207.png](%5BSA%5D%20Documentacio%CC%81n%20de%20Uso%20Pra%CC%81ctica%202%2057ce7cc25ec44379bd6b7c0b616c326c/Untitled%207.png)