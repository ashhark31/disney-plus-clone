const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/../../config.env`});

const MovieDB = require("node-themoviedb");
const api_key = process.env.API_KEY
const mdb = new MovieDB(api_key);

const crimeMovies = async () => {
    try{
        const args = {
            query: {
                with_genres: "80",
                with_original_language: "hi",
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

let latest_movies = crimeMovies();
module.exports = latest_movies.then((result) => {
    return result;
})