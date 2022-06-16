const express = require("express");
const ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", (req, res) => {
  res.send(`
    <form action="/answer" method="POST">
      <p>What is the sky color?</p>
      <input name="skyColor" autocomplete="off">
      <button>Submit</button>
    </form>
  `);
});

ourApp.post("/answer", (req, res) => {
  if (req.body.skyColor == "blue") {
    res.send(`
    <p>Congrats, that is the correct answer!.</p>
    <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
       <p>Sorry that is incorrect.</p>
       <a href="/">Back to homepage</a>
    `);
  }
});

ourApp.get("/answer", (req, res) => {
  res.send("Are you lost?");
});

ourApp.listen(3000);
