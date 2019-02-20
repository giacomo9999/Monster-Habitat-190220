const mongoose = require("mongoose");

const Monster = mongoose.model("Monster");
const monsterController = {};

monsterController.list = (req, res) => {
  Monster.find({}).exec((err, monsters) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/monsters/index", { monsters: monsters });
    }
  });
};
