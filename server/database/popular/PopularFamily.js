const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularFamilyData = require("../../movie_api/popular/PopularFamily");

popularFamilyData.then((result) => {
    db.collection('PopularFamily').insertMany(result).then(()=>{
        console.log("popular family movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})