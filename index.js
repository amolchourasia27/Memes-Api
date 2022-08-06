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

// app.listen(PORT, () => console.log(`its live at http://localHost:${PORT}`));

// app.get("/memes", (req, res) => {
//   const memeUrl = Math.floor(Math.random() * 299);
//   res.status(200).send({
//     memesUrl:
//       "https://raw.githubusercontent.com/amolchourasia/data1/main/img%20(" +
//       memeUrl +
//       ").jpg",
//     type: "image",
//   });
// });

// app.post("/memes", (req, res) => {
//   res.status(200).send({ message: "insert a meme" });
// });
