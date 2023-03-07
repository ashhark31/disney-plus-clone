const client = require("../../MongoDB");

const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

const popularDocumentaryData = require("../../movie_api/popular/PopularDocumentary");

popularDocumentaryData.then((result) => {
    db.collection('PopularDocumentary').insertMany(result).then(()=>{
        console.log("popular documentary movies data inserted successfully");
    }).catch((error) => {
        console.log(error);
    });
})