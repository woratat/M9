import express from "express";
import cors from "cors";
import db from "./database";
import helmet from "helmet";
import http from "http";

import passport from "./passport";
import routes from "../routes";
import socket from "./socket";

const app = express();
const server = http.createServer(app);

export default function start(port) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(helmet());
  passport();
  db.sequelize.sync();
  socket(server);

  app.use('/api', routes);

  server.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
  })
}
