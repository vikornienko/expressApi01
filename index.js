import express from 'express';

import { userRouter } from './users/users.js'; 


const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello!')
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`The server start on http://localhost:${port}`)
})
