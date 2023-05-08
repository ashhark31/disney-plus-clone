const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularMoviesData = require("../../movie_api/popular/PopularMovies");

popularMoviesData.then((result) => {
    db.collection('PopularMovies').insertMany(result).then(()=>{
        console.log("popular movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})