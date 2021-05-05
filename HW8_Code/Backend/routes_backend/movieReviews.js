
const express = require('express');
const router = express.Router();
const axios = require('axios');

// '/:keyword'
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    var final_json = {}

    // movies reviews endpoint
    url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data;
        get_results_list = parsed_body.results;
        make_list = []
        // limit the count to 10
        get_min_length = Math.min(10, get_results_list.length)

        for (var i = 0; i < get_min_length; i++) {
            var json = {}
            get_obj_to_parse = get_results_list[i];

            if (get_obj_to_parse.hasOwnProperty('author')) {
                json.author = get_obj_to_parse.author;
            }
            if (get_obj_to_parse.hasOwnProperty('content')) {
                json.content = get_obj_to_parse.content;
            }
            if (get_obj_to_parse.hasOwnProperty('created_at')) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                get_date = get_obj_to_parse.created_at;
                const new_date = new Date(get_date);
                json.created_time = new_date.toLocaleTimeString('en-US');
                json.created_date = new_date.toLocaleDateString(undefined, options);
            }
            if (get_obj_to_parse.hasOwnProperty('url')) {
                json.url = get_obj_to_parse.url;
            }
            if (get_obj_to_parse.author_details.hasOwnProperty('rating')) {
                if (get_obj_to_parse.author_details.rating == null) {
                    now_rating = 0;
                }
                else {
                    now_rating = get_obj_to_parse.author_details.rating;
                }
                json.rating = now_rating;
            }
            if (get_obj_to_parse.author_details.hasOwnProperty('avatar_path')) {
                if (get_obj_to_parse.author_details.avatar_path != null) {
                    if (get_obj_to_parse.author_details.avatar_path.length > 16 && get_obj_to_parse.author_details.avatar_path.slice(0, 15) == "/https://secure") {
                        json.avatar_path = get_obj_to_parse.author_details.avatar_path.slice(1, get_obj_to_parse.author_details.avatar_path.length);
                    }
                    else if (get_obj_to_parse.author_details.avatar_path.length > 16 && get_obj_to_parse.author_details.avatar_path.slice(0, 15) != "/https://secure") {
                        json.avatar_path = "https://image.tmdb.org/t/p/original" + get_obj_to_parse.author_details.avatar_path;
                    }
                    else if (get_obj_to_parse.author_details.avatar_path.length > 0 && get_obj_to_parse.author_details.avatar_path.length < 16) {
                        json.avatar_path = "https://image.tmdb.org/t/p/original" + get_obj_to_parse.author_details.avatar_path;
                    }
                    else if (get_obj_to_parse.author_details.avatar_path.length == 0) {
                        json.avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"
                    } 
                }
                else {
                    json.avatar_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"
                }

            }
            make_list.push(json);

        }
        
        final_json.review_list = make_list;
        // console.log("final backend reviews: ", final_json)
        res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })



})

module.exports = router;