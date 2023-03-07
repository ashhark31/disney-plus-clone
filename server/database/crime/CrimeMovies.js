const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const crimeMoviesData = require("../../movie_api/crime/CrimeMovies");

crimeMoviesData.then((result) => {
    db.collection('CrimeMovies').insertMany(result).then(()=>{
        console.log("crime movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})