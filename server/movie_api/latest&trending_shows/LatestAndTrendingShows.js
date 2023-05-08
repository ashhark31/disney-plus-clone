const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/../../config.env`});

const MovieDB = require("node-themoviedb");
const api_key = process.env.API_KEY
const mdb = new MovieDB(api_key);

const LatestShows = async () => {
    try{
        const args = {
            query: {
                sort_by: "release_date.desc",
                with_networks: "3919",
            }
        };
        const response = await (await mdb.discover.tv(args)).data;
        return response.results;
        
    } catch(error){
        return "[error]"
    }
};

let latest_movies = LatestShows();
module.exports = latest_movies.then((result) => {
    return result;
})