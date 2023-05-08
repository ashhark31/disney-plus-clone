const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const horrorMoviesData = require("../../movie_api/horror/HorrorMovies");

horrorMoviesData.then((result) => {
    db.collection('HorrorMovies').insertMany(result).then(()=>{
        console.log("horror movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})