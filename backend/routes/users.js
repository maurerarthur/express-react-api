const Router = require("express").Router();
const cryptoJS = require("crypto-js/md5");
const database = require("../ConnectionFactory.js");

const Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").find({}).toArray((err, result) => {

        if(err) {
            throw err;
        }

        res.send(result);

    });

});

Router.post("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("api").collection("users").findOne({ email: req.body.email }, (err, result) => {

        if(err) {
            throw err;
        }

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
                        status: 406
                    });
                }
        
            });

        }

    });

});

module.exports = Router;