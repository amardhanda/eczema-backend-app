const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 5439,
  user: "root",
  password: "rooty",
  database: "patient"
});

app.use(express.json());
app.use(express.urlencoder({ extended: true }));
app.use(express.static("public"));


connection.connect(function(error)){
  console.log("connect to database");
};

app.listen(PORT, function({
  console.log("listening at port " + PORT);
});
