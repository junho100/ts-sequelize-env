const express = require("express");

const cors = require("cors");
const sequelize = require("./model/index");
const postRouter = require("./route/post");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/posts", postRouter);

app.use((req: any, res: any, next: any) => {
  const error = new Error(`404 ${req.method} ${req.url} no router`);
  next(error);
});

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500);
  console.log(err);
  res.send("server error");
});

sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("8080");
  });
});
