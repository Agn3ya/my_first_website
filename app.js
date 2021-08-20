const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

//Express specific stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//Pug specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


//Endpoints
app.get('/', (req,res) => {
    const con = "This is a new Test"
    const params = {'title': 'This is a test', "content": con}
    res.status(200).render('index.pug', params)
});
app.post('/' , (req,res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her ${more}.`
    fs.writeFileSync('output.txt',outputToWrite) 
    const params = {'message': 'Your form has been submitted succesfully'};
    res.status(200).render('index.pug',params);
});

//Starting the server
app.listen(port, () => {
    console.log(`This application is started successfully on ${port}`);
});