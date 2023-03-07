const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularShowsData = require("../../movie_api/popular/PopularShows");

popularShowsData.then((result) => {
    db.collection('PopularShows').insertMany(result).then(()=>{
        console.log("popular shows data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})