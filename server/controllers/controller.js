const axios = require("axios");

const registerUser = (req, res, next) => {
  const db = req.app.get("db");
  let { username, password } = req.body;

  console.log(`hit`, req.body, username, password);

  db
    .createUser([username, password])
    .then(response => {
      res.status(200).send(response);
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const login = (req, res, next) => {
  const db = req.app.get("db");
  let { username, password } = req.body;

  console.log(`attempting login`);

  db
    .login([username, password])
    .then(response => {
      res.status(200).send(response);
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const updateUserInfo = (req, res, next) => {
  const db = req.app.get("db");
  let { id } = req.params;
  let { password, profile_pic } = req.body;

  db.updateUserInfo([profile_pic, username, password]);
};

module.exports = { registerUser, login, updateUserInfo };
