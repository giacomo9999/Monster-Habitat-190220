const mongoose = require("mongoose");

const MonsterSchema = new mongoose.Schema({
  api_index: Number,
  name: String,
  number_appearing: String,
  alignment: String,
  hit_dice: String,
  type: String,
  frequency: String,
  habitat: String
});

module.exports = mongoose.model("Monster", MonsterSchema);
