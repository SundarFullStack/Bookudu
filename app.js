const express = require("express");

const app_server = express();

//REGIERING ALL CONTROLLERS IN APP SERVER

app_server.use("/files", require("./Controller/Files.Controller"));

app_server.use("/todos", require("./Controller/Todos.Controller"));
app_server.use("/users", require("./Controller/Users.Controller"));

app_server.use("/mahals", require("./Controller/Mahal.controller"));

module.exports = app_server;
