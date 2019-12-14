const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    imageUrl: String,
    email: String,
    birthDate: Date,
    description: String,
    role: {type: String, enum: ['GK', 'DEF', 'CC', 'ATT']},
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
