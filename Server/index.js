/*

Practica 1 / Software Avanzado
José Francisco Puac Ixcamparic
201700342

*/

// id del ultimo registro creado en esta practica
var lastID = '1611';

// Ingresar token brindado por la API
var token = '';

// url API brindada
var url = "https://gorest.co.in/public-api/users";

// Listar el ultimo usuario creado
async function listUser() {
    
    // Construccion peticion HTTP GET
    const Http = new XMLHttpRequest();
    Http.open("GET", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send();
    Http.onreadystatechange=function(){
        // Peticion Exitosa
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            console.log(data);
            // Verificacion del codigo de la respuesta (200 OK)
            if (data.code == 200)
            {
                datos = data.data;
                console.log(datos);
                
                // Eliminar registro previo
                var lastRegister = document.getElementById("lastRegister");
                while (lastRegister.firstChild) {
                    lastRegister.removeChild(lastRegister.firstChild);
                }
                
                // Creacion visual del nuevo registro
                var newDiv = document.createElement("div");
                var att1 = document.createAttribute("class");
                att1.value = "col-md-6";
                newDiv.setAttributeNode(att1);
                var attName = document.createAttribute("class");
                attName.value = "titulo";
                var newDivName = document.createElement("div");
                newDivName.setAttributeNode(attName);
                var newName = document.createTextNode(datos.name);
                newDivName.appendChild(newName);
                newDiv.appendChild(newDivName);
                var newDivGender = document.createElement("div"); 
                var newGender = document.createTextNode(datos.gender);
                newDivGender.appendChild(newGender);
                newDiv.appendChild(newDivGender);
                var newDivEmail = document.createElement("div"); 
                var newEmail = document.createTextNode(datos.email);
                newDivEmail.appendChild(newEmail);
                newDiv.appendChild(newDivEmail);
                var newDivCreated = document.createElement("div"); 
                var newCreated = document.createTextNode(datos.created_at);
                newDivCreated.appendChild(newCreated);
                newDiv.appendChild(newDivCreated);
                var newDivUpdated = document.createElement("div"); 
                var newUpdated = document.createTextNode(datos.updated_at);
                newDivUpdated.appendChild(newUpdated);
                newDiv.appendChild(newDivUpdated);

                lastRegister.appendChild(newDiv);
            
            // Peticion Erronea
            } else {
                alert("INTENTELO DE NUEVO");
            }
        }
    } 
}

// Crear un nuevo usuario en la API
async function createUser() {
    
    // Recopilacion de datos de la pagina html, estado siempre activo
    var data = {
        name: document.forms["datos"].elements[0].value, 
        gender: document.forms["datos"].elements[1].value, 
        email: document.forms["datos"].elements[2].value, 
        status: "Active"
    };
    
    // Validacion de campos
    if(data.name == '' || data.email == '')
    {
        alert("DEBE AGREGARLE UN NOMBRE AL ALUMNO.")
        return
    }
    if(data.gender != 'Male' && data.gender != 'Female')
    {
        alert("GÉNERO INCORRECTO", "Solo se aceptan \"Male\" y \"Female\".")
        return
    }
    
    // Construccion peticion HTTP POST
    const Http = new XMLHttpRequest();
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json");
    // se agrega el token de autenticacion
    Http.setRequestHeader("Authorization", `Bearer ${token}`);
    Http.send(JSON.stringify(data));
    Http.onreadystatechange=function(){
        // Peticion Exitosa
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            // Verificacion del codigo de la respuesta (201 Creacion exitosa)
            if(data.code == 201)
            {
                // Se asigna el id de la respuesta a la respectiva variable
                lastID = data.data.id;
                alert("REGISTRO CREADO :D");
            }
            // Peticion Erronea
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    } 
}

// Modificar el ultimo usuario en la API creado con esta practica
async function modifyUser() {

    var data = {};
    
    // Verificacion de los campos ingresados sean los que se van a modificar
    if(document.forms["mod"].elements[0].value != '')
    {
        data.name = document.forms["mod"].elements[0].value;
    }
    if(document.forms["mod"].elements[1].value != '')
    {
        data.gender = document.forms["mod"].elements[1].value;
        if(data.gender != 'Male' && data.gender != 'Female')
        {
            alert("GÉNERO INCORRECTO", "Solo se aceptan \"Male\" y \"Female\".")
            return
        }
    }
    if(document.forms["mod"].elements[2].value != '')
    {
        data.email = document.forms["mod"].elements[2].value;
    }

    // Construccion peticion HTTP PUT
    const Http = new XMLHttpRequest();
    Http.open("PUT", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    // se agrega el token de autenticacion
    Http.setRequestHeader("Authorization", `Bearer ${token}`);
    Http.send(JSON.stringify(data));
    Http.onreadystatechange=function(){
        // Peticion Exitosa
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            // Verificacion del codigo de la respuesta (200 OK)
            if(data.code == 200)
            {
                alert("REGISTRO ACTUALIZADO :D");
            }
            // Peticion Erronea
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    }
}

// Eliminar el ultimo usuario en la API creado con esta practica
async function deleteUser() {

    // Construccion peticion HTTP DELETE
    const Http = new XMLHttpRequest();
    Http.open("DELETE", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    // se agrega el token de autenticacion
    Http.setRequestHeader("Authorization", `Bearer ${token}`);
    Http.send();
    Http.onreadystatechange=function(){
        // Peticion Exitosa
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            // Verificacion del codigo de la respuesta (204 DELETED)
            if(data.code == 204)
            {
                alert("REGISTRO ELIMINADO :D");
            }
            // Peticion Erronea
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    }
}
