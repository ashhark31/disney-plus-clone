const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/../../config.env`});

const MovieDB = require("node-themoviedb");
const api_key = process.env.API_KEY
const mdb = new MovieDB(api_key);

const LatestMovies = async () => {
    try{
        const args = {
            query: {
                sort_by: "release_date.desc",
                with_watch_providers: "122",
                watch_region: "IN"
            }
        };
        const response = await (await mdb.discover.movie(args)).data;
        return response.results;
        
    } catch(error){
        return "[error]"
    }
};

let latest_movies = LatestMovies();
module.exports = latest_movies.then((result) => {
    return result;
})