
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    var final_json = {}

    // cast details endpoint
    url = `https://api.themoviedb.org/3/person/${id}?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data;
        // var final_json = {}

        if (parsed_body.hasOwnProperty('name')) {
            final_json.pName = parsed_body.name;
        }
        if (parsed_body.hasOwnProperty('id')) {
            final_json.pId = parsed_body.id;
        }
        if (parsed_body.hasOwnProperty('birthday')) {
            final_json.pDob = parsed_body.birthday;
        }
        if (parsed_body.hasOwnProperty('place_of_birth')) {
            final_json.pPlace = parsed_body.place_of_birth;
        }
        if (parsed_body.hasOwnProperty('gender')) {
            gender_number = parsed_body.gender;
            if (gender_number == 1) { get_gender = 'Female' }
            else if (gender_number == 2) { get_gender = "Male" }
            else {get_gender = "Undefined"}
            final_json.pGender = get_gender;
        }
        if (parsed_body.hasOwnProperty('known_for_department')) {
            final_json.pKnown_for = parsed_body.known_for_department;
        }
        if (parsed_body.hasOwnProperty('also_known_as')) {
            get_known_names_array = parsed_body.also_known_as;
            known_names = ""
            for (var i = 0; i < get_known_names_array.length-1; i++){
                known_names += get_known_names_array[i] + ", "
            }
            if (get_known_names_array.length > 0) {
                known_names += get_known_names_array[get_known_names_array.length - 1];
            }
            final_json.pOther_names = known_names;
        }
        if (parsed_body.hasOwnProperty('biography')) {
            final_json.pBiography = parsed_body.biography;
        }
        if (parsed_body.hasOwnProperty('profile_path')) {
            make_path = `https://image.tmdb.org/t/p/w500/${parsed_body.profile_path}`
            final_json.pImage = make_path;
        }
        if (parsed_body.hasOwnProperty('imdb_id')) {
            make_imdb_url = "https://imdb.com/name/" + parsed_body.imdb_id;
            final_json.pImdb_id = make_imdb_url;
        }
        if (parsed_body.hasOwnProperty('homepage')) {
            final_json.pHomepage = parsed_body.homepage;
        }
        
        // res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })


    // cast external ids endpoint
    url = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data;
        // var final_json = {}

        if (parsed_body.hasOwnProperty('imdb_id')) {
            final_json.pImdb_id = parsed_body.imdb_id;
        }
        if (parsed_body.hasOwnProperty('facebook_id')) {
            final_json.pFacebook_id = parsed_body.facebook_id;
        }
        if (parsed_body.hasOwnProperty('instagram_id')) {
            final_json.pInstagram_id = parsed_body.instagram_id;
        }
        if (parsed_body.hasOwnProperty('twitter_id')) {
            final_json.pTwitter_id = parsed_body.twitter_id;
        }
        
        res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })

    
})

module.exports = router;