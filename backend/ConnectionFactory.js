const MongoClient = require("mongodb").MongoClient;
const { cluster, dbName, username, password } = require("./database.json");
const connection = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

class Connection {

    constructor() {
        this.db = null;
    }

    async Mongo() {
        this.db = await MongoClient.connect(connection, { useUnifiedTopology: true });
        return this.db;
    }

}

module.exports = Connection;