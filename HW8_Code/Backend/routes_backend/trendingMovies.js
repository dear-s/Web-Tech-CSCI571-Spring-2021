
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', async (req, res, next) => {
    // const new_req = require('request');
    var final_json = {}

    // 5. Trending Movies Section
    url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=96c4dbe355e954e689f15dae0862f68d';
    axios.get(url).then(function (response) {
        parsed_body = response.data.results;
        // var count = 0;
        var json4 = []

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("title")) {
                new_dict.title = parsed_body[i].title;
            }
            if (parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null) {
                new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                json4.push(new_dict); // ignore if no poster
                // count += 1
            }
            // if (count == 24) {
            //     break
            // }
        }

        final_json.trending_movies_section = json4
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