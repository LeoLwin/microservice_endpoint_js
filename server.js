const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const ServiceBroker = require("./broker/broker");
const indexController = require("./controller/indexController");
const config = require("./config/config");

ServiceBroker.start().then(() => {
  const app = express();

  console.log("Something fix");
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Welcome to Blog API");
  });

  app.use("/api", indexController);

  const PORT = config.port || 8000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on http://0.0.0.0:${PORT}`);
  });
});
