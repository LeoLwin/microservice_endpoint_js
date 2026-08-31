import dotenv from "dotenv";
import express from "express";
import ServiceBroker from "./broker/broker.js";
import indexController from "./controller/indexController.js";
import config from "./config/config.js";

dotenv.config();

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
