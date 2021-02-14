"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

let date = new Date();
let today = date.toLocaleDateString("en-US", options);

let items = ["eat", "sleep", "repeat"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("list", { listOfItems: items, dateToday: today });
});

app.post("/", (req, res) => {
  let newToDO = req.body.todoTask;
  items.push(newToDO);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
