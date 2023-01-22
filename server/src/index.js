const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const token = req.body.credential;
  console.log(token);
  res.cookie("google_token", token, { maxAge: 900000, httpOnly: false });
  res.redirect(302, "http://localhost:5500/admin.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
