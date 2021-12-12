import Koa from "koa";
import mongoose from "mongoose";
import Router from "koa-router";
import appRouter from "./router";
import "./db";

const app = new Koa();
const router = new Router();
appRouter(router);
app.use(router.routes());

const db = mongoose.connection;
db.on("error", () => {
  console.error("db open error");
});
db.once("open", () => {
  console.log("db open success");
  app.listen(4000, () => {
    console.log("server started port 4000");
  });
});
