import express from "express";

import { sequelize } from "./model/index";

const app = express();

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("8080");
  });
});
