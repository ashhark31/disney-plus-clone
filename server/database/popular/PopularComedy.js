const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularComedyData = require("../../movie_api/popular/PopularComedy");

popularComedyData.then((result) => {
    db.collection('PopularComedy').insertMany(result).then(()=>{
        console.log("popular comedy movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})