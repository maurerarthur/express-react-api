const express = require("express");
const app = express();
const cors = require("cors");

const users = require("./routes/users.js");

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/api");
});

app.use("/api", users);

app.listen(8000);