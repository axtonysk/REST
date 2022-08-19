import mysql from 'mysql';

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"password",
    database:"school",
});

db.connect((err) => {
    if(err) {
        console.warn(err)
    }
});

export default db;