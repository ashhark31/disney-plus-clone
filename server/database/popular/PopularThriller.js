const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularThrillerData = require("../../movie_api/popular/PopularThriller");

popularThrillerData.then((result) => {
    db.collection('PopularThriller').insertMany(result).then(()=>{
        console.log("popular thriller movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})