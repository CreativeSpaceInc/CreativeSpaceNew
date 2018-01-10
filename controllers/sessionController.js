// /controllers/artistsController.js

const db = require("../models");
// Defining methods for the artistsController
module.exports = {
  checkSessionId: function(req, res) {
    db.Session
      .find()
      .sort({ date: -1 })
      .limit(1)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
