const mysql = require("mysql2");

// Create Connection
const db = mysql.createConnection({
  host: "loaclhost",
  user: "root",
  password: "password",
  database: "mydb",
});

// connect
db.connect((err) => {
  if (err) throw err;
  console.log("Connection to MyScl");
});

// Run a Query
db.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
});

// Insert Data
const sql = "INSERT INTO users (name, age) VALUES (?, ?)";
db.query(sql, ["Alice", 25], (err, result) => {
  if (err) throw err;
  console.log("1 record inserted, ID: ", result.insertId);
});

// Using Connection Pool (Recommended)
// For larger applications, use connection pooling to handle multiple queries efficiently.

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Example query
pool.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
});
