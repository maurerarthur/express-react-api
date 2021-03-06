const Router = require("express").Router();
const cryptoJS = require("crypto-js/md5");
const database = require("../ConnectionFactory.js");

const Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").find({}).project({ password: 0 }).toArray((err, result) => {
        res.send(result);
    });

});

Router.get("/:email", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").find({ email: req.params.email }).project({ password: 0 }).toArray((err, result) => {

        if(result.length > 0) {
            res.send(result);
        } else {
            res.send({
                message: `No user with the email ${req.params.email} was found`,
                status: 404
            });
        }

    });

});

Router.put("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").findOne({ email: req.body.email }, (err, result) => {

        if(result) {
            res.send({
                message: `The email ${req.body.email} has already been registered`,
                status: 200
            });
        } else {

            [req.body].forEach(i => {

                if(i.name != null && i.email != null && i.password != null) {

                    conn.db("api").collection("users").insertOne({
                        name: req.body.name,
                        email: req.body.email,
                        password: cryptoJS(req.body.password).toString()
                    });

                    res.send({
                        message: "User successfully registered",
                        status: 200
                    });

                } else {
                    res.send({
                        message: "One or more fields are incorrect",
                        status: 400
                    });
                }

            });

        }

    });

});

Router.patch("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").find({ email: req.body.email }, (err, result) => {

        result.count().then(count => {
            if(count == 1) {
                conn.db("api").collection("users").updateOne({ email: req.body.email }, {
                    $set: {
                        name: req.body.name,
                        email: req.body.email
                    }
                }).then(() => {
                    res.send({
                        message: `${req.body.email} was successfully updated`,
                        status: 200
                    });
                }).catch(() => {
                    res.send({
                        message: "Something went wrong",
                        status: 400
                    });
                });
            } else {
                res.send({
                    message: `${req.body.email} was not found`,
                    status: 400
                });
            }
        });

    });

});

Router.delete("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").deleteOne({ email: req.body.email }, (err, result) => {

        if(result.deletedCount > 0) {
            res.send({
                message: `${req.body.email} has been deleted`,
                status: 200
            });
        } else {
            res.send({
                message: `${req.body.email} was not found`,
                status: 404
            });
        }

    });

});

module.exports = Router;