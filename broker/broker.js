import { ServiceBroker } from "moleculer";
import dotenv from "dotenv";
import config from "../config/config.js";

console.log("Initializing Service Broker with Redis transporter...");

dotenv.config();

console.log("Redis Config:", {
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

const theBroker = new ServiceBroker({
  namespace: "BlogMaKyawt",
  nodeID: "endpoint-node123444",
  logLevel: "info",

  transporter: {
    type: "Redis",
    options: {
      host: config.redis.host,
      port: Number(config.redis.port),
      password: config.redis.password,
      db: 0,
    },
  },
  cacher: {
    type: "Redis",
    options: {
      redis: {
        host: config.redis.host,
        port: Number(config.redis.port),
        password: config.redis.password,
        db: 0,
      },
    },
  },

  logger: true,
  created(broker) {
    broker.logger.info("created");
  },
  started(broker) {
    broker.logger.info("started");
  },
  stopped(broker) {
    broker.logger.info("stopped");
  },
});

export default theBroker;
