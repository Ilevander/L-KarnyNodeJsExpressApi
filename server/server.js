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
app.post('/notes/add', (req,res) => {
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
app.get('/notes/all', (req,res) => {
    db.getNotes()
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
})

//GET By Id
app.get('/note/:id',(req,res) => {
    const {id} = req.params;
    db.getNoteById(id)
    .then(data => {
        if(!data)
            {
                res.status(404).send("Note Id doesn't exist"+id);
            }
            else
            {
                res.send(data);
            }
    })
    .catch(err => {
        res.status(500).send(err);
    })
})



const port = 3000;

app.listen(port, ()=> {
    console.log(`Server has started on port ${port}...`);
    //connect to database after starting the server
    db.connect();
});
