
var lastID = '1';

async function listUsers() {
    console.log('listing');
    try {
        const response = await axios.get(`${url}/1449`, {
            headers: {
              'Authorization': `token ${token}`
            }
        });
        console.log(response.data);
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}

async function listUser() {
    console.log('listing');
    url = "https://gorest.co.in/public-api/users";

    const Http = new XMLHttpRequest();
    Http.open("GET", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send();
    Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            console.log(data);
            if (data.code == 200)
            {
                datos = data.data;
                console.log(datos);
                
                var lastRegister = document.getElementById("lastRegister");
                while (lastRegister.firstChild) {
                    lastRegister.removeChild(lastRegister.firstChild);
                }
                
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
            } else {
                alert("INTENTELO DE NUEVO");
            }
        }
    } 
}

async function createUser() {
    console.log('creating');
    url = "https://gorest.co.in/public-api/users";
    var data = {
        name: document.forms["datos"].elements[0].value, 
        gender: document.forms["datos"].elements[1].value, 
        email: document.forms["datos"].elements[2].value, 
        status: "Active"
    };
    
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
    console.log(data);

    const Http = new XMLHttpRequest();
    Http.open("POST", url, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("Authorization", "Bearer f1ada6fae35b78478e8db876353f4c424684a8ea728322f892a35c843841e959");
    Http.send(JSON.stringify(data));
    Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            console.log(data);
            if(data.code == 201)
            {
                lastID = data.data.id;
                alert("REGISTRO CREADO :D");
                console.log(lastID);
            }
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    } 
}

async function modifyUser() {
    console.log('modifying');
    url = "https://gorest.co.in/public-api/users";

    var data = {};
    
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

    
    console.log(data);

    const Http = new XMLHttpRequest();
    Http.open("PUT", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("Authorization", "Bearer f1ada6fae35b78478e8db876353f4c424684a8ea728322f892a35c843841e959");
    Http.send(JSON.stringify(data));
    Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            console.log(data);
            if(data.code == 200)
            {
                alert("REGISTRO ACTUALIZADO :D");
            }
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    }
}

async function deleteUser() {
    console.log('deleting');

    const Http = new XMLHttpRequest();
    Http.open("DELETE", `${url}/${lastID}`, true);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.setRequestHeader("Authorization", "Bearer f1ada6fae35b78478e8db876353f4c424684a8ea728322f892a35c843841e959");
    Http.send();
    Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var data = JSON.parse(Http.responseText)
            console.log(data);
            if(data.code == 204)
            {
                alert("REGISTRO ELIMINADO :D");
            }
            else
            {
                alert("INTENTELO NUEVAMENTE");
            }
            
        }
    }
}

// listUsers();

// listUser(1451);

// let data = {name:"José Puac", gender: "Male", email:"puac235@gmail.com", status:"Active"}

// createUser(data);

// let data = {email:"puac1451@gmail.com"}

// modifyUser(1451, data);

// deleteUser(1451);