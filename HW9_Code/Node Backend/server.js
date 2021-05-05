const express = require('express');
var createError = require('http-errors');
const app = express(),
    bodyParser = require('body-parser');

const morgan = require('morgan');

const home_page = require('./routes_backend/home_page');
const searchbar = require('./routes_backend/searchbar');
const popularMovies = require('./routes_backend/popularMovies');
const popularTV = require('./routes_backend/popularTV');
const topMovies = require('./routes_backend/topMovies');
const topTV = require('./routes_backend/topTV');
const trendingMovies = require('./routes_backend/trendingMovies');
const trendingTV = require('./routes_backend/trendingTV');
const detailsPage = require('./routes_backend/detailsPage');
const detailsPage2 = require('./routes_backend/detailsPage2');
const personDetails = require('./routes_backend/personDetails');
const movieReviews = require('./routes_backend/movieReviews');
const tvReviews = require('./routes_backend/tvReviews');
const recMovies = require('./routes_backend/recMovies');
const recTv = require('./routes_backend/recTv');

app.use(morgan('dev'));
app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

// app.use(express.static(process.cwd()+"/angular-app/"));

app.use('/home_page', home_page)
app.use('/searchbar', searchbar)
app.use('/popularMovies', popularMovies)
app.use('/popularTV', popularTV)
app.use('/topMovies', topMovies)
app.use('/topTV', topTV)
app.use('/trendingMovies', trendingMovies)
app.use('/trendingTV', trendingTV)
app.use('/detailsPage', detailsPage)
app.use('/detailsPage2', detailsPage2)
app.use('/personDetails', personDetails)
app.use('/movieReviews', movieReviews)
app.use('/tvReviews', tvReviews)
app.use('/recMovies', recMovies)
app.use('/recTv', recTv)


app.get('/', (req, res) => {
    res.send("Backend Home Page for Android App (HW9) - make calls using other routes");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(8080, () => {
    console.log("Server listening on port 8080")
})