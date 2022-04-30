import express from "express";

import { sequelize } from "./model/index";

const postRouter = require("./route/post");

const app = express();

app.use("/post", postRouter);

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("8080");
  });
});
