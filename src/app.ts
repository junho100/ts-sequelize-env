import express from "express";

import { sequelize } from "./model/index";

const postRouter = require("./route/post");

const app = express();

app.use("/post", postRouter);

app.use((req, res, next) => {
  const error = new Error(`404 ${req.method} ${req.url} no router`);
  next(error);
});

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500);
  res.send("server error");
});

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("8080");
  });
});
