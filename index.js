if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const posts = require("./posts");
const { json } = require("express");
// const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3001, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/allPosts", (req, res) => {
  res.json(posts);
});

app.get("/posts", (req, res) => {
  const data = Math.floor(Math.random() * 299);
  res.json(posts[data]);
});

app.get("/allPosts", (req, res) => {
  res.json(posts);
});

app.get("/:index", (req, res) => {
  let index = req.params.index;
  let postByIdex = posts.find((posts) => posts.index == index);
  if (postByIdex) {
    res.status(200).send(postByIdex);
  } else {
    res.status(400).send("error");
  }
});

// post request and user by id by adding new files

// app.post("/", (req, res) => {
//   const data = req.body;
//   posts.push(data);
//   res.send("data added");
// });

// app.get("/:_id", (req, res) => {
//   let _id = req.params._id;
//   console.log(params);
//   let postById = posts.find((posts) => posts._id == _id);
//   if (postById) {
//     res.status(200).send(postById);
//   } else {
//     res.status(400).send("error");
//   }
// });
