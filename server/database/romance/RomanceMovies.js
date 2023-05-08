const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const romanceMoviesData = require("../../movie_api/romance/RomanceMovies");

romanceMoviesData.then((result) => {
    db.collection('RomanceMovies').insertMany(result).then(()=>{
        console.log("romance movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})