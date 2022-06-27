const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const Connection = require('mysql2/typings/mysql/lib/Connection');

const app =express();

app.use(cors());
app.use(bodyParser.json())

app.get('/tasks',(req,res)=>{
    res.send('list of all task')
})


app.post('/addTask',(req,res)=>{

    const ADD_QUERY="insert into todomanager.tasks(tasks) values ($(req.body.task))"
    Connection.query(ADD_QUERY,(err)=>{
        if(err);
    })
    res.send('you can add tasks')
})

app.get('/deleteTask',(req,res)=>{
    res.send('deleted task')
})

app.listen(4000,()=>{
    console.log('running on port 4000')
})