
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { json } = require('express');

// '/:keyword'
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    var final_json = {}
    // var count = 0;

    // recommended tv show endpoint
    url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data.results;
        // console.log("parsed_body: ", parsed_body);
        array = []
        count = 0

        for (var i = 0; i < parsed_body.length; i++) {
            make_json = {}
            if (parsed_body[i].hasOwnProperty('id')) {
                make_json.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty('name')) {
                make_json.title = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty('poster_path') && parsed_body[i].poster_path != null && parsed_body[i].hasOwnProperty('backdrop_path') && parsed_body[i].backdrop_path != null) {
                make_json.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                make_json.backdrop_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].backdrop_path;
                make_json.media_type = "tv"
                array.push(make_json)
                count += 1
            }
            if (count == 10) {
                break
            }
        }
        final_json.recTv = array
        // res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })




    // similar movies endpoint
    url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1`
    
    await axios.get(url)
    .then(function (response) {
        parsed_body = response.data.results;
        array2 = []

        for (var i = 0; i < parsed_body.length; i++) {
            make_json = {}
            if (parsed_body[i].hasOwnProperty('id')) {
                make_json.id = parsed_body[i].id;
            }
            if (parsed_body[i].hasOwnProperty('name')) {
                make_json.name = parsed_body[i].name;
            }
            if (parsed_body[i].hasOwnProperty('poster_path') && parsed_body[i].poster_path != null) {
                make_json.poster_path = "https://image.tmdb.org/t/p/w500" + parsed_body[i].poster_path;
                array2.push(make_json)
            }
        }
        final_json.simTv = array2;
        res.send(final_json);
    })
    .catch(function (error) {
        console.log(error);
    })
    
})

module.exports = router;