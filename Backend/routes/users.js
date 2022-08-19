import express from 'express';
import {listOfAccount, studentLookUp, addAccount, updateAccount} from '../controllers/users.js'

const route = express.Router();

route.get('/accounts', listOfAccount);
route.get('/findstudent', studentLookUp);
route.post('/addaccount', addAccount);
route.post('/updateaccount', updateAccount);
