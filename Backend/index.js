const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;

app.listen(PORT, ()=> console.log(`Server: http://localhost:${PORT}`))

app.use(express.json())

app.get('/accounts', (req, res) => {

    // sample; change to database
    res.status(200).send({username: 'axtonyew', name: 'axton', gender: 'male'}) 
});

app.post('/updateprofile', (req, res) => {

});


function generateAPIKey() {
}

function hashAPIKey() {

}