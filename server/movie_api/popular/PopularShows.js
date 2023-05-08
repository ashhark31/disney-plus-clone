const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/../../config.env`});

const MovieDB = require("node-themoviedb");
const api_key = process.env.API_KEY
const mdb = new MovieDB(api_key);

const popularShows = async () => {
    try{
        const args = {
            query: {
                sort_by: "popularity.desc",
                with_networks: "3919",
            }
        };
        const response = await (await mdb.discover.tv(args)).data;
        return response.results;
        
    } catch(error){
        return "[error]"
    }
};

let latest_movies = popularShows();
module.exports = latest_movies.then((result) => {
    return result;
})