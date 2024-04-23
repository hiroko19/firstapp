const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

const routers = require("./routes");
app.use(routers);

//アプリケーションが処理できないパスに対してリクエストを送られた時に、/non-existent-pageへリダイレクトする処理
app.use((req, res, next) => {
  res.redirect(302, '/non-existent-page');    //302リダイレクトを示す
});

module.exports = app;
