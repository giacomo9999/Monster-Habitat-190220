const express = require("express");
const router = express.Router();
const monster = require("../controllers/monsterController.js");

// Get all monsters
router.get("/", monster.list);

// Get single monster by id
router.get("/show/:id", monster.show);

// Create monster
router.get("/create", monster.create);

// Save monster
router.post("/save", monster.save);

// Edit monster
router.get("/edit/:id", monster.edit);

// Edit update (? ...save updated monster?)
router.post("/update/:id", monster.update);

// Delete monster
router.post("/delete/:id", monster.delete);

module.exports = router;
