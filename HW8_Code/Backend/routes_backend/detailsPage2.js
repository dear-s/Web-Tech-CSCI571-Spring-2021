
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    // console.log("id from frontend: ", id);
    var final_json = {}
  

    // tv video endpoint
    url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data.results;
        var json1 = []

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            check_pushed = false;

            if (check_pushed == true){break}

            if (parsed_body[i].hasOwnProperty('type')) {
                if (parsed_body[i].type == "Trailer") {
                    new_dict.type = parsed_body[i].type;

                    if (parsed_body[i].hasOwnProperty("site")) {
                        new_dict.site = parsed_body[i].site;
                    }
                    if (parsed_body[i].hasOwnProperty("name")) {
                        new_dict.name = parsed_body[i].name;
                    }
                    if (parsed_body[i].hasOwnProperty("key")) {
                        new_dict.key = parsed_body[i].key;
                        new_dict.create_video_link = `https://www.youtube.com/watch?v=${new_dict.key}`
                        json1.push(new_dict); // ignore if no key, no link
                        check_pushed = true
                        break
                    }
                }
                else if (parsed_body[i].type == "Teaser") {
                    new_dict.type = parsed_body[i].type;

                    if (parsed_body[i].hasOwnProperty("site")) {
                        new_dict.site = parsed_body[i].site;
                    }
                    if (parsed_body[i].hasOwnProperty("name")) {
                        new_dict.name = parsed_body[i].name;
                    }
                    if (parsed_body[i].hasOwnProperty("key")) {
                        new_dict.key = parsed_body[i].key;
                        new_dict.create_video_link = `https://www.youtube.com/watch?v=${new_dict.key}`
                        json1.push(new_dict); // ignore if no key, no link
                        check_pushed = true
                        break
                    }
                }
            }
        }

        final_json.tv_video_endpoint = json1;

        if (final_json.tv_video_endpoint.length == 0) {
            // enter default vid id
            new_dict = {}
            new_dict.key = "tzkWB85ULJY"
            new_dict.create_video_link = `https://www.youtube.com/watch?v=${new_dict.key}`
            json1.push(new_dict);
            final_json.tv_video_endpoint = json1;
        }

        // console.log("final_json.tv_video_endpoint: ", final_json.tv_video_endpoint);
        // res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })



    // tv details endpoint
    url = `https://api.themoviedb.org/3/tv/${id}?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = [response.data];
        var json1 = []

        for (var i = 0; i < parsed_body.length; i++){
            new_dict = {}
            if (parsed_body[i].hasOwnProperty("name")) {
                new_dict.name = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty("genres")) {
                get_genre_array = parsed_body[i].genres;
                genre_string = ""
                // console.log("get_genre_array: ", get_genre_array);
                for (var j = 0; j < get_genre_array.length - 1; j++){
                    get_name = get_genre_array[j].name;
                    genre_string += get_name + ", ";
                }
                if (get_genre_array.length > 0) {
                    genre_string += get_genre_array[get_genre_array.length-1].name;
                }
                new_dict.genres = genre_string;
            }
            if (parsed_body[i].hasOwnProperty("spoken_languages")) {
                get_lang_array = parsed_body[i].spoken_languages;
                lang_string = ""
                for (var k = 0; k < get_lang_array.length - 1; k++){
                    get_lang = get_lang_array[k].english_name;
                    lang_string += get_lang + ", ";
                }
                if (get_lang_array.length > 0) {
                    lang_string += get_lang_array[get_lang_array.length - 1].english_name;
                }
                new_dict.spoken_languages = lang_string;
            }
            if (parsed_body[i].hasOwnProperty("first_air_date")) {
                new_dict.first_air_date = parsed_body[i].first_air_date;
            }
            if (parsed_body[i].hasOwnProperty("episode_run_time")) {
                get_runtime = parsed_body[i].episode_run_time[0];
                // change into hrs and mins
                get_hrs = Math.trunc(get_runtime / 60)
                get_mins = get_runtime % 60;
                if (get_mins == 0) {
                    new_dict.episode_run_time = get_hrs.toString() + "hrs";
                }
                else if (get_hrs == 0) {
                    new_dict.episode_run_time = get_mins.toString() + "mins";
                }
                else {
                    new_dict.episode_run_time = get_hrs.toString() + "hrs " + get_mins.toString() + "mins";
                }
                console.log(new_dict.episode_run_time)
            }
            if (parsed_body[i].hasOwnProperty("overview")) {
                new_dict.overview = parsed_body[i].overview;
            }
            if (parsed_body[i].hasOwnProperty("vote_average")) {
                new_dict.vote_average = parsed_body[i].vote_average;
            }
            if (parsed_body[i].hasOwnProperty("tagline")) {
                new_dict.tagline = parsed_body[i].tagline;
            }
            json1.push(new_dict);
        }

        final_json.tv_details_endpoint = json1;
        // console.log("final backendddd: ", final_json)
        // res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })



    // tv cast endpoint
    url = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = [response.data];
        all_cast_array = parsed_body[0].cast;
        all_crew_array = parsed_body[0].crew;
        cast_json = [];
        var cc = 0;
        // crew_json = []
        // var json1 = []

        for (var a = 0; a < all_cast_array.length; a++){
            new_obj = {}
            obj = all_cast_array[a];
            if (obj.hasOwnProperty('id')) {
                new_obj.char_id = obj.id;
            }
            if (obj.hasOwnProperty('name')) {
                new_obj.name = obj.name;
            }
            if (obj.hasOwnProperty('character')) {
                new_obj.character = obj.character;
            }
            if (obj.hasOwnProperty('profile_path') && obj.profile_path != null && obj.profile_path.length > 0) {
                full_profile_path = "https://image.tmdb.org/t/p/w500/" + obj.profile_path;
                new_obj.full_pp = full_profile_path;
                new_obj.pp = obj.profile_path;

                cast_json.push(new_obj);
                cc += 1
            }
            // if (cc == 20) {
            //     break
            // }
        }

        // console.log("cast_json: ", cast_json);

        final_json.tv_cast_endpoint = cast_json;
        res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })
    
})

module.exports = router;