const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

const prepareAndStartServer = () => {
  const app = express(); // created the new express object

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server Started at Port: ${PORT}`);
  });
};

prepareAndStartServer();
