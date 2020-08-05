const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./routes/users.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/api/users");
});

app.use("/api/users", users);

app.listen(8000);