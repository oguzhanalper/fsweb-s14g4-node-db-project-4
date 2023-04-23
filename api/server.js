const express = require("express");
const server = express();
server.use(express.json());

const tariflerRoutes = require("./tarifler/tarifler-router");

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and runing",
  });
});

module.exports = server;
