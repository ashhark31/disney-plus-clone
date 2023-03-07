const client = require('./MongoDB')
const db = client.db("mydisneyPlus")

const collections = ["ActionMovies", "ComedyMovies", "CrimeMovies", "DramaMovies", "DramaShows", "HorrorMovies", "KidsMovies", "LatestAndTrendingMovies", "LatestAndTrendingShows", "PopularComedy", "PopularCrime", "PopularDocumentary", "PopularFamily", "PopularMovies", "PopularMythology", "PopularRomance", "PopularScience", "PopularShows", "PopularThriller", "RomanceMovies", "SuperHerosMovies", "ThrillerMovies", "TrendingMovies", "TrendingTVShows"];

const deleteOldCollections = () => {
    for(let index=0; index < collections.length; index++){
        db.collection(collections[index]).deleteMany();
    }
    console.log("All Collections deleted successfully.");
}

const insertNewCollections = () => {
    const trendingMovies = require("./database/trending/TrendingMovies");
    const trendingTVShows = require("./database/trending/TrendingTVShows");
    const latestAndTrendingMovies = require('./database/latest&trending/LatestAndTrendingMovies');
    const latestAndTrendingShows = require('./database/latest&trending_shows/LatestAndTrendingShows');
    const actionMovies = require('./database/action/ActionMovies');
    const comedyMovies = require('./database/comedy/ComedyMovies');
    const romanceMovies = require('./database/romance/RomanceMovies');
    const thrillerMovies = require('./database/thriller/ThrillerMovies');
    const kidsMovies = require('./database/kids/KidsMovies');
    const popularShows = require('./database/popular/PopularShows');
    const popularMovies = require('./database/popular/PopularMovies');
    const dramaShows = require('./database/drama/DramaShows');
    const dramaMovies = require('./database/drama/DramaMovies');
    const crimeMovies = require('./database/crime/CrimeMovies');
    const superherosMovies = require('./database/superheros/SuperHeros');
    const horrorMovies = require('./database/horror/HorrorMovies');
    const popularMythology = require('./database/popular/PopularMythology');
    const popularRomance = require('./database/popular/PopularRomance');
    const popularFamily = require('./database/popular/PopularFamily');
    const popularCrime = require('./database/popular/PopularCrime');
    const popularThriller = require('./database/popular/PopularThriller');
    const popularComedy = require('./database/popular/PopularComedy');
    const popularDocumentary = require('./database/popular/PopularDocumentary');
    const popularScience = require('./database/popular/PopularScience');
}

setInterval(()=> {
    deleteOldCollections();
    insertNewCollections();
}, 604800000);