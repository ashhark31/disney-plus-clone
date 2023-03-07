const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const thrillerMoviesData = require("../../movie_api/thriller/ThrillerMovies");

thrillerMoviesData.then((result) => {
    db.collection('ThrillerMovies').insertMany(result).then(()=>{
        console.log("thriller movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})