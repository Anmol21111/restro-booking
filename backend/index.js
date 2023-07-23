const express = require('express');

const app = express();
const cors = require('cors');
// intialize express
const port = 5000;

const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
// hav to be done manually

app.use(cors());
app.use(express.json());
// the respose we get from the end the user we et it in form of JSON and vice versa

// middleware
app.use('/user',userRouter);
app.use('/order',orderRouter);
app.use(express.json());

// to accept request client also called routing
app.get('/',(req,res) => {
    res.send('response from backend')
});

app.get('/add',(req,res) => {  
    res.send('response from add route');
})

app.get('/getall',(req,res) => {
    res.send('Response from get');
    
})

// update 
// delete
app.listen(port,()=> {
    console.log('server started');
});