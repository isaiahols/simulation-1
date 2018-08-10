require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const massive = require('massive');

const con = require('./controller');


// Setting things up here
const app = express();

app.use(bodyParser.json());

const { NODE_PORT, CONNECTION_STRING } = process.env;


// Get Massive going here
massive(CONNECTION_STRING).then(db => {
    console.log('we have made a connection!');
    app.set('db', db);
}).catch((error) => {
    console.log(error);
})

//
///End Points go here
//


// this is getting all
app.get(`/api/inventory`, con.getInventory);

// this gets just one item
app.get(`/api/inventory/:id`, con.getOneItem);

// this is posting
app.post(`/api/inventory`, con.addToInventory);

// this is editing
app.put(`/api/inventory/:id`, con.editItem);

// this is deleting an item
app.delete(`/api/inventory/:id`, con.removeItem);



// Run the server Here

app.listen(NODE_PORT, () => {
    console.log(`we are listening on NODE_PORT ${NODE_PORT}`);

})
