const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello there it is trial for get");
});

//user routes middleware file

const userRoute = require("./routes/userRoutes");

//dbconnection
const dbConnection = require("./db/dbConfig.js");

app.use(express.json);

//when any request is coming with this starting structure send the issue to the user route
//user routes middleware

app.use("/api/user", userRoute);

async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    await app.listen(port);
    console.log(result);
  } catch (error) {
    console.log("the error is :", error.message);
  }
}

start();
