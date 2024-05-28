const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleWere 
app.use(cors());
app.use(express.json())
const users =[
    {id: 1, name:'sabana', email:'sabana@gmail.com'},
    {id: 2, name:'Sabila', email:'sabila@gmail.com'},
    {id: 3, name:'Sabnur', email:'sabnur@gmail.com'},
]

app.get('/', (req, res)=>{
    res.send("user management server is running")
}) 

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log('post api hitting')
    console.log(req.body);
    const newUsers = (req.body);
    newUsers.id = users.length + 1;
    users.push(newUsers);
    res.send(newUsers)
})
app.listen(port,() =>{
    console.log(`server is running on PORT : ${port}`)
})