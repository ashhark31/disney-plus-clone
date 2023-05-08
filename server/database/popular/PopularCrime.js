const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularCrimeData = require("../../movie_api/popular/PopularCrime");

popularCrimeData.then((result) => {
    db.collection('PopularCrime').insertMany(result).then(()=>{
        console.log("popular crime movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})