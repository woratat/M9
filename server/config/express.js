import express from "express";
import cors from "cors";
import db from "./database";
import helmet from "helmet";
import http from "http";

import passport from "./passport";
import routes from "../routes";
import socket from "./socket";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  }
});

export default function start(port) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(helmet());
  passport();
  db.sequelize.sync();
  socket(server);

  io.sockets.on('connection', (socket) => {
    socket.on('room', (room) => { //room = Post id
        socket.join(room);
        socket.on('sand-message', (message) => {
            io.sockets.in(room).emit('message', message);
        });

        socket.on('sand-update', (message) => {
            io.sockets.in(room).emit('message-update', message);
        });

        socket.on('sand-delete', (message) => {
            io.sockets.in(room).emit('message-delete', message);
        })
    });
});

  app.use("/api", routes);
  app.use("/image", express.static("./resources/assets/uploads"));

  




  server.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}
