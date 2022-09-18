const app = require("express")();
const cors = require("cors");
const routes = require("./routes");

const express = require('express');
const bodyParser = require('body-parser');

app.use(cors());
routes.load(app);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Api running at ::3000`);
});
