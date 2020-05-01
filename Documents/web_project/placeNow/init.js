const express = require("express");
const app = express();
const path = require("path");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/static", express.static(path.join(__dirname, "static")));

app.listen(4000, () => console.log("🎉Listening on!"));
app.get("/", function (req, res) {
  res.render("index");
});
