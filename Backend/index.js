const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 8080;
app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});
db.connect();
db.end();

// Retrieve all accounts
app.get('/accounts', (req, res) => {

    let sql = 'SELECT * FROM students';
    
    db.query(sql, (error, results) => {

        if(error) throw error;
        res.send(results);
    });
});

// Retrieve specific account
app.get('/accounts/:id', (req, res) => {

    let sql = `SELECT * FROM students WHERE id = ${req.params.id}`;
    
    db.query(sql, (error, results) => {

        if(error) throw error;
        res.send(results);
    });
});

// Add new account
app.post('/addaccount', (req, res) => {
    
    // DB not created yet
    let sql = 'INSERT INTO accounts .............';

    db.query(sql, (error, results) => {
        
        if(error) throw error;
        res.send('New account added.')
    });
})

// Update account details
app.post('/updateprofile/:id', (req, res) => {

});


function generateAPIKey() {
}

function hashAPIKey() {

}

app.listen(PORT, ()=> console.log(`Server: http://localhost:${PORT}`));
