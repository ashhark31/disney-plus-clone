const dotenv = require("dotenv");
dotenv.config({path:`${__dirname}/config.env`});

const express = require("express");
const port = process.env.PORT || 3010
const app = new express();

const bodyParser = require("body-parser")

const client = require("./MongoDB");
const databaseName = "mydisneyPlus";
const db = client.db(databaseName);

// const trendingMovies = require("./database/trending/TrendingMovies");
// const trendingTVShows = require("./database/trending/TrendingTVShows");
// const latestAndTrendingMovies = require('./database/latest&trending/LatestAndTrendingMovies');
// const latestAndTrendingShows = require('./database/latest&trending_shows/LatestAndTrendingShows');
// const actionMovies = require('./database/action/ActionMovies');
// const comedyMovies = require('./database/comedy/ComedyMovies');
// const romanceMovies = require('./database/romance/RomanceMovies');
// const thrillerMovies = require('./database/thriller/ThrillerMovies');
// const kidsMovies = require('./database/kids/KidsMovies');
// const popularShows = require('./database/popular/PopularShows');
// const popularMovies = require('./database/popular/PopularMovies');
// const dramaShows = require('./database/drama/DramaShows');
// const dramaMovies = require('./database/drama/DramaMovies');
// const crimeMovies = require('./database/crime/CrimeMovies');
// const superherosMovies = require('./database/superheros/SuperHeros');
// const horrorMovies = require('./database/horror/HorrorMovies');
// const popularMythology = require('./database/popular/PopularMythology');
// const popularRomance = require('./database/popular/PopularRomance');
// const popularFamily = require('./database/popular/PopularFamily');
// const popularCrime = require('./database/popular/PopularCrime');
// const popularThriller = require('./database/popular/PopularThriller');
// const popularComedy = require('./database/popular/PopularComedy');
// const popularDocumentary = require('./database/popular/PopularDocumentary');
// const popularScience = require('./database/popular/PopularScience');

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/trendingMovies', (req,res) => {
    db.collection('TrendingMovies').find({}).limit(4).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/trendingTVShows', (req,res) => {
    db.collection('TrendingTVShows').find({}).limit(4).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/latestTrendMovies', (req,res) => {
    db.collection('LatestAndTrendingMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/latestTrendShows', (req,res) => {
    db.collection('LatestAndTrendingShows').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/actionMovies', (req,res) => {
    db.collection('ActionMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/comedyMovies', (req,res) => {
    db.collection('ComedyMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/romanceMovies', (req,res) => {
    db.collection('RomanceMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/thrillerMovies', (req,res) => {
    db.collection('ThrillerMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/kidsMovies', (req,res) => {
    db.collection('KidsMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularShows', (req,res) => {
    db.collection('PopularShows').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularMovies', (req,res) => {
    db.collection('PopularMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/dramaShows', (req,res) => {
    db.collection('DramaShows').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/dramaMovies', (req,res) => {
    db.collection('DramaMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/crimeMovies', (req,res) => {
    db.collection('CrimeMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/horrorMovies', (req,res) => {
    db.collection('HorrorMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/superheros', (req,res) => {
    db.collection('SuperHerosMovies').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularMythology', (req,res) => {
    db.collection('PopularMythology').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularRomance', (req,res) => {
    db.collection('PopularRomance').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularFamily', (req,res) => {
    db.collection('PopularFamily').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularCrime', (req,res) => {
    db.collection('PopularCrime').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularThriller', (req,res) => {
    db.collection('PopularThriller').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularComedy', (req,res) => {
    db.collection('PopularComedy').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularDocumentary', (req,res) => {
    db.collection('PopularDocumentary').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.get('/popularScience', (req,res) => {
    db.collection('PopularScience').find({}).toArray().then((result,error) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
})