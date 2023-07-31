const express = require("express");

const app_server = express();

//REGIERING ALL CONTROLLERS IN APP SERVER

app_server.use("/files", require("./Controller/Files.Controller"));

module.exports = app_server;
