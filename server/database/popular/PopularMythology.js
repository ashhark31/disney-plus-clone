const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularMythologyData = require("../../movie_api/popular/PopularMythology");

popularMythologyData.then((result) => {
    db.collection('PopularMythology').insertMany(result).then(()=>{
        console.log("popular mythology movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})