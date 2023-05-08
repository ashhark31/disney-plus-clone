const mongo = require("mongodb")
const MongoClient = mongo.MongoClient;

const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/config.env`});
const connectionURL = process.env.DATABASE;

const client = new MongoClient(connectionURL, {
    useUnifiedTopology: true
});

client.connect().then(()=> {
    console.log("Database connected successfully");
});

module.exports = client