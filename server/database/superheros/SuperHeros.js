const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const superherosMoviesData = require("../../movie_api/superheros/SuperHeros");

superherosMoviesData.then((result) => {
    db.collection('SuperHerosMovies').insertMany(result).then(()=>{
        console.log("superheros movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})