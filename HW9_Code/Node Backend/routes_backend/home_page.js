  
const express = require('express');
const router = express.Router();
const axios = require('axios');

// '/:keyword'
router.get('/', async (req, res, next) => {
    // const id = req.params.keyword;
    // const new_req = require('request');
    var final_json = {}

    // 1. Currently playing movies carousel
    url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1'
    
    axios.get(url)
    .then(function (response) {
        // handle success
        // console.log("response from home page: ", response.data);
        parsed_body = response.data.results;
        var count = 0
        var json1 = []

        for (var i = 0; i < parsed_body.length; i++) {
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("title")) {
                new_dict.title = parsed_body[i].title;
            }
            if (parsed_body[i].hasOwnProperty("backdrop_path") && parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null && parsed_body[i].backdrop_path != null) {
                new_dict.backdrop_path = "https://image.tmdb.org/t/p/original" + parsed_body[i].backdrop_path;
                new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                new_dict.media_type = "movie"
                json1.push(new_dict); // ignore if no poster
                count += 1
            }
            if (count == 6) {
                break
            }
        }

        final_json.currently_playing_movies = json1;
        res.send(final_json);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    

})

module.exports = router;