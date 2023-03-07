const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const actionMoviesData = require("../../movie_api/action/ActionMovies");

actionMoviesData.then((result) => {
    db.collection('ActionMovies').insertMany(result).then(()=>{
        console.log("action movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})