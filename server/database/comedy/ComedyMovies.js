const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const comedyMoviesData = require("../../movie_api/comedy/ComedyMovies");

comedyMoviesData.then((result) => {
    db.collection('ComedyMovies').insertMany(result).then(()=>{
        console.log("comedy movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})