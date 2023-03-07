const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const dramaMoviesData = require("../../movie_api/drama/DramaMovies");

dramaMoviesData.then((result) => {
    db.collection('DramaMovies').insertMany(result).then(()=>{
        console.log("drama movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})