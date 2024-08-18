//dbconnection
const dbConnection = require("../db/dbConfig.js");

//to be send to the routes

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
}
if (!username || !firstname || !lastname || !email || !password) {
  console.log("please put the all info");
}
login = (req, res) => {
  res.send("good connect login");
};

check = (req, res) => {
  res.get("good connect check");
};

module.exports = { register, login, check };
