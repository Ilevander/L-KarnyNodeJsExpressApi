const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Creating the app (express Application)
const app = express();

//Using dependencies from Node modules for Express
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let notes= [];
//Building the API
//POST:
app.post('/notes', (req,res) => {
    const body = req.body;
    console.log("BODY: ", body);
    notes.push(body.title);
    console.log("NOTES: " , notes);
    res.send(true);
});


const port = 3000;

app.listen(port, ()=> {
    console.log(`Server has started on port ${port}...`);
});
