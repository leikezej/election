const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'allindb-login',
});

// connect to mysql database
db.connect( (err) => {
    if(error) {
    console.log(error)
    } else 
    console.log("Successfully Connected to Database")
 })


app.get("/", (req,res) => {
    res.send("<h1>HOME</h1>")
});

app.listen(5001, () => {
    console.log("Server Started on Port 5001");
})