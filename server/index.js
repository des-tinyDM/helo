require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(express());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
