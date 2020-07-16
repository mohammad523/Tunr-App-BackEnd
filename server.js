const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");
const songsController = require("./controllers/songs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use("/api", songsController);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});