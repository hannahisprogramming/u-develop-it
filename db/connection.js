const mysql = require('mysql2');

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

module.exports = db;