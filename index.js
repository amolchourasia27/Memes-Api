// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const posts = require("./posts");
// const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

app.get("/posts", (req, res) => {
  const data = Math.floor(Math.random() * 299);
  res.json(posts[data]);
});

app.get("/", (req, res) => {
  res.send("Api is running");
});
