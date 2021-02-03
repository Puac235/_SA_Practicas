//Librería utilizada para las peticiones http asíncronas
const axios = require('axios');

//url de la API
const url = "https://gorest.co.in/public-api/users";
const token = require('./tkn_gorest').token;

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

async function listUser(id) {
    console.log('listing');
    try {
        const response = await axios.get(`${url}/${id}`, {
            headers: {
              'Authorization': `token ${token}`
            }
        });
        console.log(response.data);
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}

async function createUser(data) {
    console.log('creating');
    try {
        const response = await axios.post(url, data, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}

async function modifyUser(id,data) {
    console.log('modifying');
    try {
        const response = await axios.put(`${url}/${id}`, data, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}

async function deleteUser(id) {
    console.log('deleting');
    try {
        const response = await axios.delete(`${url}/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}

// listUsers();

// listUser(1451);

// let data = {name:"José Puac", gender: "Male", email:"puac235@gmail.com", status:"Active"}

// createUser(data);

// let data = {email:"puac1451@gmail.com"}

// modifyUser(1451, data);

// deleteUser(1451);