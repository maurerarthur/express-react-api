const Router = require("express").Router();

Router.get("/", (req, res) => {

    res.send({
        id: 1289301283912,
        name: "John",
        email: "john@live.com"
    });

});

module.exports = Router;