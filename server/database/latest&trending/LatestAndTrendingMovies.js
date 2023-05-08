const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const latestMoviesData = require("../../movie_api/latest&trending/LatestAndTrendingMovies");

latestMoviesData.then((result) => {
    db.collection('LatestAndTrendingMovies').insertMany(result).then(()=>{
        console.log("latest movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})