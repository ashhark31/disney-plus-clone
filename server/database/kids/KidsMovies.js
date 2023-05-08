const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const kidsMoviesData = require("../../movie_api/kids/KidsMovies");

kidsMoviesData.then((result) => {
    db.collection('KidsMovies').insertMany(result).then(()=>{
        console.log("kids movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})