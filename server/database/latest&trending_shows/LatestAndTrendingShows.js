const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const latestShowsData = require("../../movie_api/latest&trending_shows/LatestAndTrendingShows");

latestShowsData.then((result) => {
    db.collection('LatestAndTrendingShows').insertMany(result).then(()=>{
        console.log("latest shows data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})