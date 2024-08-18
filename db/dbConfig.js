const mysql = require("mysql2");

const dbConnection = mysql.createPool({
  host: "localhost",
  user: "evanadmin",
  password: "EVANADMINLOCAL@2024!!!a",
  database: "evangadiforum",
  connectionLimit: 10,
});
/*
dbConnection.execute("select 'test' ", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});
*/

module.exports = dbConnection.promise();
