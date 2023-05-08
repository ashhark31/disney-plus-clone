const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const dramaShowsData = require("../../movie_api/drama/DramaShows");

dramaShowsData.then((result) => {
    db.collection('DramaShows').insertMany(result).then(()=>{
        console.log("drama shows data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})