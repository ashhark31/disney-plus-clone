const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularRomanceData = require("../../movie_api/popular/PopularRomance");

popularRomanceData.then((result) => {
    db.collection('PopularRomance').insertMany(result).then(()=>{
        console.log("popular romance movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})