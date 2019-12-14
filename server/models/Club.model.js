const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema(
  {
    name: String,
    description: String,
    imageUrl: String,
    eventStatusActive: Boolean,
    location: { type: { type: String }, coordinates: [Number] },
    hasEvent:  { type: Schema.Types.ObjectId, ref: "Matchs" }
    
  },

  {
    timestamps: true
  }
);

const ClubModel = mongoose.model("Club", clubSchema);
module.exports = ClubModel;
