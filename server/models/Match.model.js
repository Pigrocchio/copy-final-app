const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema(
  {
    name: String,
    description: String,
    date: Date,
    starthour: String,
    endhour: String,
    participant: [{ type: Schema.Types.ObjectId, ref: "User" }],
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    price: Number,
    eventStatusActive: Boolean,
    club: { type: Schema.Types.ObjectId, ref: "Club" }
  },

  {
    timestamps: true
  }
);

const MatchModel = mongoose.model("Matchs", matchSchema);
module.exports = MatchModel;
