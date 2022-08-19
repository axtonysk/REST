import db from '../config.js';

// Retrieve all accounts
export const listOfAccount = (req, res) => {

    let sql = 'SELECT * FROM students';
    
    db.query(sql, (error, results) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.send(results);
        }
    });
};

// Retrieve specific account
export const studentLookUp = (req, res) => {

    let sql = `SELECT * FROM students WHERE id = ${req.params.id}`;
    
    db.query(sql, (error, results) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.send(results);
        }
    });
};

// Add new account
export const addAccount = (req, res) => {
    
    // DB not created yet
    let sql = 'INSERT INTO accounts .............';

    db.query(sql, (error, results) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.send(results);
        }
    });
};

// Update account details
export const updateAccount = (req, res) => {

};


function generateAPIKey() {
}

function hashAPIKey() {

}