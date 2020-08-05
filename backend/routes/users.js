const Router = require("express").Router();
const database = require("../ConnectionFactory.js");

const Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();

    console.log(conn);

    res.send({
        id: 1289301283912,
        name: "John",
        email: "john@live.com"
    });

});

module.exports = Router;