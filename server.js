const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

//Connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    //mysql username
    user: 'root',
    //mysql password
    password: 'password',
    database: 'election'
  },
  console.log('Connected to the election db.')
)

//queries
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

//must be last; Default response for any route Not Found
app.use((req, res) => {
  res.status(404).end();
});

//app.listen
app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`);
});