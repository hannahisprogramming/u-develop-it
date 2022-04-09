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
app.get('/api/candidates', (req, res) => {
  const sql = `SELECT * FROM candidates`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({error: err.message});
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

//GET single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// })

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//   VALUES (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// })

//must be last; Default response for any route Not Found
app.use((req, res) => {
  res.status(404).end();
});

//app.listen
app.listen(PORT, () => {
  console.log( `Server running on port ${PORT}`);
});