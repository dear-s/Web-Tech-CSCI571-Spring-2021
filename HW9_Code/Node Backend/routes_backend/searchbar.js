const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:search', async (req, res, next) => {
    console.log(req.params);
    const query = req.params.search;
        console.log("query parameter: ", query);

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
            if (parsed_body[i].hasOwnProperty("vote_average")) {
                new_dict.rating = parsed_body[i].vote_average/2;
            }
            if (parsed_body[i].hasOwnProperty("first_air_date")) {
                get_date = parsed_body[i].first_air_date;
                get_year = get_date.slice(0,4)
                new_dict.year = get_year
            }
            if (parsed_body[i].hasOwnProperty("release_date")) {
                get_date = parsed_body[i].release_date;
                get_year = get_date.slice(0,4)
                new_dict.year = get_year
            }
            if (parsed_body[i].hasOwnProperty("media_type")) {
                if (parsed_body[i].media_type == "movie" || parsed_body[i].media_type == "tv") {
                    new_dict.media_type = parsed_body[i].media_type;

                    // backdrop_image - form the link
                    if (parsed_body[i].hasOwnProperty("backdrop_path") && parsed_body[i].backdrop_path != null && parsed_body[i].hasOwnProperty("poster_path") && parsed_body[i].poster_path != null) {
                        new_dict.backdrop_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].backdrop_path;
                        new_dict.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                        json1.push(new_dict); // ignore if no poster & backdrop
                        count += 1
                    }
                }
                
            }
            
            if (count == 20) {
                break
            }
        }

        final_json.searched_results = json1

        res.send(final_json);
    })
        .catch(function (error) {
        // handle error
        console.log(error);
        })

})

module.exports = router;