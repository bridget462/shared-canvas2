console.log("my socket server is running");

const express = require("express");
const app = express();
app.listen(3000);

app.use(express.static("./public"));
