const mongoose = require("mongoose");

// The line below is from the tutorial, and throws MissingSchemaError: Schema hasn't been registered for model "Monster".
// const Monster = mongoose.model("Monster");

// The line below is from https://stackoverflow.com/questions/52020881/how-to-include-a-model-in-node-express-js and seems to work.  It is backed up by the official Express documentation at MDN: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
Monster = require("../models/Monster.js");

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

monsterController.show = (req, res) => {
  Monster.findOne({ _id: req.params.id }).exec((err, monster) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/monsters/show", { monster: monster });
    }
  });
};

monsterController.create = (req, res) => {
  res.render("../views/monsters/create");
};

monsterController.save = (req, res) => {
  const monster = new Monster(req.body);
  monster.save(err => {
    if (err) {
      console.log(err);
      res.render("../views/monsters/create");
    } else {
      console.log("Successfully created a monster.");
      res.redirect("/monsters/show" + monster._id);
    }
  });
};

monsterController.edit = (req, res) => {
  Monster.findOne({ _id: req.params.id }).exec((err, monster) => {
    if (err) {
      console.log(err);
    } else {
      res.render("../views/monsters/edit", { monster: monster });
    }
  });
};

monsterController.update = (req, res) => {
  Monster.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        api_index: req.body.api_index,
        name: req.body.name,
        number_appearing: req.body.name,
        alignment: req.body.name,
        hit_dice: req.body.name,
        type: req.body.name,
        frequency: req.body.name,
        habitat: req.body.name
      }
    },
    { new: true },
    (err, monster) => {
      if (err) {
        console.log(err);
        res.render("../views/monsters/edit", { monster: req.body });
      }
      res.redirect("/monsters/show/" + monster._id);
    }
  );
};

monsterController.delete = (req, res) => {
  Monster.remove({ _id: req.params.id }, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Monster Deleted!");
      res.redirect("/monsters");
    }
  });
};

module.exports = monsterController;
