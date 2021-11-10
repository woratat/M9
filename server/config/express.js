import express from "express";
import cors from "cors";
import db from "./database";
import helmet from "helmet";

const app = express();

export default function start(port) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(helmet());
  db.sequelize.sync();

  // app.use('/api', routes);

  app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
  })
}
