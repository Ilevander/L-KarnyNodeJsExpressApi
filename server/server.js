const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Creating the app (express Application)
const app = express();

//calling the DATABASE class from its directory from project: 
const Database = require("./Database");
const db = new Database();//Object or instance from the database

//Using dependencies from Node modules for Express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Building the API

//POST:
app.post('/notes', (req,res) => {
    const body = req.body;
    console.log("BODY: ", body);
    db.addNote(body)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

//GET: 
app.get('/notes', (req,res) => {
    res.send(notes);
})

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server has started on port ${port}...`);
    //connect to database after starting the server
    db.connect();
});
