//STEP 1: IMPORT ALL INSTALLED NECESSARY PACKAGES TO BUILD NODE SERVER

const express = require("express");

const http_server = express();

//PORT

const port = 5001;

http_server.listen(port, "0.0.0.0", () => {
  console.log("SERVER STARTED IN THE PORT", port);
});

http_server.use("/", require("./app"));
