const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodName: String,

    quantity: String,

    location: String,

    expiryDate: String,

    description: String,

    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    status: {
      type: String,
      default: "Available"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Food", foodSchema);