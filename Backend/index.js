import express from 'express';
import route from './routes/users.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/login', route)

app.listen(PORT, ()=> console.log(`Server: http://localhost:${PORT}`));
