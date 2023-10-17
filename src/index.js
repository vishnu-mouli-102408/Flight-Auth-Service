const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = () => {
  const app = express(); // created the new express object

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);
  });
};

prepareAndStartServer();
