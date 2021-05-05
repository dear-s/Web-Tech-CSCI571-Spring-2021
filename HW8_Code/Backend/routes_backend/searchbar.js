const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
    // const new_req = require('request');
    const query = req.query.search;
        // console.log("query parameter: ", query);

    var final_json = {}

    // get search query - typeahead
    url = `https://api.themoviedb.org/3/search/multi?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&query=${query}`
    axios.get(url).then(function(response) {
        parsed_body = response.data.results;
        var count = 0
        var json1 = []

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("id")) {
                new_dict.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty("title")) {
                new_dict.title = parsed_body[i].title;
            }
            if (parsed_body[i].hasOwnProperty("name")) {
                new_dict.title = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty("media_type")) {
                if (parsed_body[i].media_type == "movie" || parsed_body[i].media_type == "tv") {
                    new_dict.media_type = parsed_body[i].media_type;

                    if (parsed_body[i].hasOwnProperty("backdrop_path") && parsed_body[i].backdrop_path != null) {
                        new_dict.backdrop_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].backdrop_path;
                        json1.push(new_dict); // ignore if no poster
                        count += 1
                    }
                }
                
            }
            
            if (count == 7) {
                break
            }
        }

        final_json.searched_results = json1
        // console.log("backend searchbar final_json: ", final_json);
        res.send(final_json);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
        })

})

module.exports = router;