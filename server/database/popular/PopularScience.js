const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularScienceData = require("../../movie_api/popular/PopularScience");

popularScienceData.then((result) => {
    db.collection('PopularScience').insertMany(result).then(()=>{
        console.log("popular Science movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})