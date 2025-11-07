const mongooes = require("mongoose");

var mongoURL = "mongodb+srv://admin:admin@hotelcluster.c73bv8i.mongodb.net/StayRoomProject";

mongooes.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongooes.connection;

connection.on("error", () => {
  console.log("connection are failed (:");
});

connection.on("connected", () => {
  console.log("server running.......... ):");
});

module.exports = mongooes;
