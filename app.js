const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const layouts = require("express-ejs-layouts");
const route = require("./server/routes");
app.use(layouts);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", route);
app.listen(port, () => {
  console.log("listening on port", port);
});
