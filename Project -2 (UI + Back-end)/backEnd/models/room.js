const mongoose = require("mongoose");

// Create MongoDB Schemas in models.....
const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    maxcount: {
      type: Number,
      required: true,
    },

    phonenumber: {
      type: String,
      required: true,
    },

    rentperday: {
      type: Number,
      required: true,
    },

    imageUrls: [],

    currentbooking: [],

    type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// now, create the model, akta function jata 2 ta paremiter nay =>
//                              1st paramiter is calactions name,
//                              2nd paramiter is Schemas

const roomModel = mongoose.model("room", roomSchema);
module.exports = roomModel;
