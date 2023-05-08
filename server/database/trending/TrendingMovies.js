const { ObjectId } = require("mongodb");
const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const trendingData = require("../../movie_api/trending/TrendingMovies");
trendingData.then((result) => {
    db.collection('TrendingMovies').insertMany(result).then(()=>{
        console.log("trending data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})