
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', async (req, res, next) => {
    // const new_req = require('request');
    var final_json = {}
    
    // 7. Top rated TV Shows Section
    url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1';
    axios.get(url).then(function (response) {
        parsed_body = response.data.results;
        var json6 = []
        // var count = 0

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("name")) {
                new_dict.name = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null) {
                new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                json6.push(new_dict); // ignore if no poster
                // count += 1
            }
            // if (count == 24) {
            //     break
            // }
        }

        final_json.top_rated_tv_shows_section = json6
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