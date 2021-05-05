
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', async (req, res, next) => {
    // const new_req = require('request');
    var final_json = {}

    // 8. Trending TV Shows Section
    url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=96c4dbe355e954e689f15dae0862f68d';
    axios.get(url).then(function (response) {
        parsed_body = response.data.results;
        var json7 = []
        var count = 0

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("name")) {
                new_dict.title = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty("backdrop_path") && parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null && parsed_body[i].backdrop_path != null) {
                new_dict.backdrop_path = "https://image.tmdb.org/t/p/original" + parsed_body[i].backdrop_path;
                new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                new_dict.media_type = "tv"
                json7.push(new_dict); // ignore if no poster
                count += 1
            }
            if (count == 6) {
                break
            }
        }

        final_json.trending_tv_shows_section = json7
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