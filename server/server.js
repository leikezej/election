const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: "127.0.01",
    user: "root",
    password: "",
    database: 'all-in-DB',
});

con.connect(function(err) {
    if (err) throw err;

    });

app.post('/register', (req, res) => {
    const username = require.body.username
    const password = require.body.password

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)", 
      [username, password],
      (err, result) => {
        console.log(err);
     }
   );
});


console.log(err)

// pag set port, listen for requests 

app.listen(3006, () => {
    console.log("Server is now running");
});

