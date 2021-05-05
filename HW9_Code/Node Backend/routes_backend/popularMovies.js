
const express = require('express');
const router = express.Router();
const axios = require('axios');

// '/:keyword'
router.get('/', async (req, res, next) => {
    // const new_req = require('request');
    var final_json = {}

    // 3. Popular Movies Section
    url = 'https://api.themoviedb.org/3/movie/popular?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1';
    axios.get(url).then(function (response) {
        parsed_body = response.data.results;
        var count = 0
        var json2 = []

        for (var i = 0; i < parsed_body.length; i++) {
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("title")) {
                new_dict.title = parsed_body[i].title;
            }
            if (parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null && parsed_body[i].hasOwnProperty("backdrop_path") && parsed_body[i].backdrop_path != null) {
                new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                new_dict.media_type = "movie";
                new_dict.backdrop_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].backdrop_path;
                json2.push(new_dict); // ignore if no poster
                count += 1
            }
            if (count == 10) {
                break
            }
        }

        final_json.popular_movies_section = json2
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