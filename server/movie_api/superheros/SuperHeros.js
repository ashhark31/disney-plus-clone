const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/../../config.env`});

const MovieDB = require("node-themoviedb");
const api_key = process.env.API_KEY
const mdb = new MovieDB(api_key);

const superherosMovies = async () => {
    try{
        const args = {
            query: {
                language: "en-US",
                with_companies: "420|19551|38679|2301|13252"
            }
        };
        const response = await (await mdb.discover.movie(args)).data;
        return response.results;
        
    } catch(error){
        return "[error]"
    }
};

let latest_movies = superherosMovies();
module.exports = latest_movies.then((result) => {
    return result;
})