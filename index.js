const express = require("express");
const app = express();
const posts = require("./posts");
app.listen(process.env.PORT || 5000, () => console.log("Server running"));

app.get("/posts", (req, res) => {
  const data = Math.floor(Math.random() * 299);
  res.json(posts[data]);
});

app.get("/", (req, res) => {
  res.send("Api is running");
});
