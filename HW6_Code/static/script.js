document.getElementById("home_btn_id").click();

var can_call_cast = false;
var count_casts = 0

function home_button(elem) {
  var x = document.getElementById("toggle_content");
  // console.log("home is clicked!!");

  var button = document.getElementsByClassName("js-button");
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("active-button");
  }
  elem.classList.add("active-button");

  // fetch from flask server - json data - for slideshow
  json_file = loading_json("https://sanya638.azurewebsites.net/home");

  function loading_json(url) {
    var xml_http_request = new XMLHttpRequest(url);
    xml_http_request.open("GET", url, false);
    xml_http_request.send();
    json_file = JSON.parse(xml_http_request.responseText);
    return json_file;
  }

  get_trending_movies_list = json_file["trending_movies_top_5"];

  // loop through it and make a slideshow - 3 seconds
  x.innerHTML = "<h2 id='home_titles'>Trending Movies</h2>";
  x.innerHTML += `<div class='slideshow-container'><div class='mySlides fade'> <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_movies_list[0]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_movies_list[0]["title"]
  } (${get_trending_movies_list[0]["release_date"].slice(
    0,
    4
  )})</div></div><div class='mySlides fade'> <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_movies_list[1]["backdrop_path"]
  }' style='width:100%'>  <div class='text'>${
    get_trending_movies_list[1]["title"]
  } (${get_trending_movies_list[1]["release_date"].slice(
    0,
    4
  )})</div></div><div class='mySlides fade'> <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_movies_list[2]["backdrop_path"]
  }' style='width:100%'>  <div class='text'>${
    get_trending_movies_list[2]["title"]
  } (${get_trending_movies_list[2]["release_date"].slice(
    0,
    4
  )})</div></div><div class='mySlides fade'> <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_movies_list[3]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_movies_list[3]["title"]
  } (${get_trending_movies_list[3]["release_date"].slice(
    0,
    4
  )})</div></div><div class='mySlides fade'> <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_movies_list[4]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_movies_list[4]["title"]
  } (${get_trending_movies_list[4]["release_date"].slice(
    0,
    4
  )})</div></div></div>`;

  // second slideshow
  get_trending_tv_list = json_file["trending_shows_top_5"];

  // loop through it and make a slideshow - 3 seconds
  x.innerHTML += "<h2 id='home_titles2'>TV Shows On-Air Today</h2>";
  x.innerHTML += `<div class='slideshow-container second'>
  <div class='mySlides2 fade'>
  <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_tv_list[0]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_tv_list[0]["name"]
  } (${get_trending_tv_list[0]["first_air_date"].slice(
    0,
    4
  )})</div></div>
  <div class='mySlides2 fade'>
  <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_tv_list[1]["backdrop_path"]
  }' style='width:100%'>  <div class='text'>${
    get_trending_tv_list[1]["name"]
  } (${get_trending_tv_list[1]["first_air_date"].slice(
    0,
    4
  )})</div></div>
  <div class='mySlides2 fade'>
  <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_tv_list[2]["backdrop_path"]
  }' style='width:100%'>  <div class='text'>${
    get_trending_tv_list[2]["name"]
  } (${get_trending_tv_list[2]["first_air_date"].slice(
    0,
    4
  )})</div></div>
  <div class='mySlides2 fade'>
  <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_tv_list[3]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_tv_list[3]["name"]
  } (${get_trending_tv_list[3]["first_air_date"].slice(
    0,
    4
  )})</div></div>
  <div class='mySlides2 fade'>
  <img src='https://image.tmdb.org/t/p/w780/${
    get_trending_tv_list[4]["backdrop_path"]
  }' style='width:100%'> <div class='text'>${
    get_trending_tv_list[4]["name"]
  } (${get_trending_tv_list[4]["first_air_date"].slice(
    0,
    4
    )})</div></div>
  </div>`;

  var slideIndex = 0;
  showSlides();
  var slideIndex2 = 0;
  showSlides2();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slides[slideIndex - 1] != undefined) {
      slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

  function showSlides2() {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {
      slideIndex2 = 1;
    }
    if (slides2[slideIndex2 - 1] != undefined) {
      slides2[slideIndex2 - 1].style.display = "block";
    }
    setTimeout(showSlides2, 3000); // Change image every 2 seconds
  }


}

// design the Search button functionality
// creating toggling effect - styling
function search_button(elem) {
  var x = document.getElementById("toggle_content");
  // console.log("search is clicked");

  var button = document.getElementsByClassName("js-button");
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("active-button");
  }
  elem.classList.add("active-button");

  // fetch from flask server
  // make a form
  x.innerHTML = `<div id="search_body">
      <div id="red-shading">
      <h4 id="search_header">Search</h4>
      <div id="form_id">
        <form name="name" id="search_form" method="GET" action="https://sanya638.azurewebsites.net/search">
          <div id="search_keyword_div">
            <label id="required-field">Keyword</label>
            <input type="text" name="keyword" id="search_keyword" class="required" size="50"/>
          </div>
          <br>
          <div id="search_category_div">
            <label id="required-field">Category</label>
            <select name="category" id="search_category" class="required">
            <option disabled selected value></option>
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
              <option value="both">Movies and TV Shows</option>
            </select>
          </div>
          <br>
          <div id="search_buttons_div">
            <div onclick="search_form_button(this)" id="search_form_button">Search</div>
            <div id="clear_form_button" onclick="reset_function(this)">Clear</div>
          </div>
        </form>
        </div>
      </div>

      <div id="search_results_to_show"></div>
    </div>`;
}

// clear the values from the form
function reset_function(ele) {
  document.getElementById("search_form").reset();

  // clears out all the search results
  var leet = document.getElementById('search_results_to_show')
  leet.innerHTML = ``
}

function search_form_button(ele) {
  var requireds = document.getElementsByClassName("required");
  var error = 0;
  var len = requireds.length

  for (var i = 0; i < len; i++) {
    if (requireds[i].value == "") {
      error += 1;
    }
  }

  // handle invalid whitespaces - 'keyword'
  var key = document.getElementById("search_keyword").value;
  var new_key = ""
  for (var indexx = 0; indexx < key.length; indexx++){
    if (key[indexx] == " ") {
      new_key += key[indexx]
    }
  }

  // console.log("key: ", key)
  // console.log("new_key: ", new_key)

  if (key.length == new_key.length) {
    error += 1
  }

  console.log("total errors: ", error)
  if (error > 0) {
    alert("Please enter valid values.");
  } else if (error === 0) {
    URL = "https://sanya638.azurewebsites.net/search/?";
    URL += "keyword=" + document.getElementById("search_keyword").value;
    URL += "&category=" + document.getElementById("search_category").value;
    json_to_retrieve = loadJSON(URL);
    function loadJSON(url) {
      xml_http_request = new XMLHttpRequest();
      xml_http_request.open("GET", url, false);
      xml_http_request.send();
      json_to_retrieve = JSON.parse(xml_http_request.responseText);
      return json_to_retrieve;
    }
    console.log("json_to_retrieve: ", json_to_retrieve);

     // got the json response -- make cards
      var show_results_area = document.getElementById("search_results_to_show");
      show_results_area.innerHTML = "";

    // handle invalid cases
    if (json_to_retrieve.hasOwnProperty('search_for')) {
      // loop this thing with the total result objects
      results = json_to_retrieve.search_for; // this is an array
      if (results.length == 0) {
        show_results_area.innerHTML += `
        <div id="no_results">No results found.</div>
        `
      }
      else {
        show_results_area.innerHTML +=
        "<p id='showing_results'>Showing results...<p>";
      }
    }
    else {
      show_results_area.innerHTML += `
        <div id="no_results">No results found.</div>
        `
      results = []
    }

    
    

    for (var i = 0; i < results.length; i++) {

      r = results[i]; // it is an object
      // check for title or name
      if (r.hasOwnProperty("name")) {
        // movies
        r.title = r.name;
      }
      // check for release_date or first_air_date
      if (r.hasOwnProperty("first_air_date")) {
        // tv show
        r.release_date = r.first_air_date;
      }

      single_string_genres = "";
        for (var j = 0; j < r.genre_names.length - 1; j++) {
          single_string_genres += r.genre_names[j] + ", ";
        }
        single_string_genres += r.genre_names[r.genre_names.length - 1];

        // check for genre_names -- length
        if (r.genre_names.length === 0) {
          single_string_genres = "N/A"
      }
      
      if (r.poster_path == null) {
        show_results_area.innerHTML += `
        <div class="card_layout"> 
          <div class="card_cols" id="red_line_col"></div>
          <div class="card_cols" id="image_col"><img src='poster_path_movie_placeholder.png' width="200" height="300"></div>
          <div class="card_cols" id="desc_col">
            <div id="card_title">${r.title}</div>
            <div id="card_year_genre">${r.release_date.slice(
              0,
              4
            )} | ${single_string_genres}</div>
            <div id="card_votes"><span id="red_star">&#9733 ${(r.vote_average/2).toFixed(1)}/5</span> &nbsp;<sup> ${r.vote_count} votes</sup></div>
            <div id="card_overview"><p class="multi-line-truncate">${r.overview}</p></div>
            <div id="card_show_more_button_div">
              <button id="card_show_more_button${i}" saved_overview="${r.overview}" which_i="${i}" value="${r.id}" onclick="showing_more(this)">Show more</button>
            </div>
          </div>
        </div>

        <div id="myModal${i}" class="modal${i}"></div>
        `;
      }

      else {
        show_results_area.innerHTML += `
        <div class="card_layout">
          <div class="card_cols" id="red_line_col"></div>
          <div class="card_cols" id="image_col"><img src='https://image.tmdb.org/t/p/w500/${
            r.poster_path
          }' width="200" height="300"></div>
          <div class="card_cols" id="desc_col">
            <div id="card_title">${r.title}</div>
            <div id="card_year_genre">${r.release_date.slice(
              0,
              4
            )} | ${single_string_genres}</div>
            <div id="card_votes"><span id="red_star">&#9733 ${(r.vote_average/2).toFixed(1)}/5</span> &nbsp;<sup> ${r.vote_count} votes</sup></div>
            <div id="card_overview"><p class="multi-line-truncate">${r.overview}</p></div>
            <div id="card_show_more_button_div">
              <button id="card_show_more_button${i}" saved_overview="${r.overview}" which_i="${i}" value="${r.id}" onclick="showing_more(this)">Show more</button>
            </div>
          </div>
        </div>

        <div id="myModal${i}" class="modal${i}"></div>
        `;
      }
    }
  }
}



function showing_more(ele) {
  // removing stuff
  var elementsss = document.getElementsByClassName('mod_cast_cards')
  while (elementsss.length > 0) {
    elementsss[0].parentNode.removeChild(elementsss[0])
  }
  var elementsss2 = document.getElementsByClassName('mod_review_cards')
  while (elementsss2.length > 0) {
    elementsss2[0].parentNode.removeChild(elementsss2[0])
  }

  var amt = ele.getAttribute('value');

  make_url = "https://sanya638.azurewebsites.net/show_more/?";
  make_url += "id=" + amt;
  // console.log("amt: ", amt)
  json_to_ret = loadJSON(make_url);
    
    function loadJSON(url) {
      xml_http_request = new XMLHttpRequest();
      xml_http_request.open("GET", url, false);
      xml_http_request.send();
      pop_up_json = JSON.parse(xml_http_request.responseText);
      return pop_up_json;
    }
    console.log("pop_up_json: ", pop_up_json);

  // 0 to 9 (included)
  var which_i = ele.getAttribute('which_i');
  var saved_overview = ele.getAttribute('saved_overview');

  single_string_languages = "";
    for (var j = 0; j < pop_up_json.details.spoken_languages.length - 1; j++) {
      single_string_languages += pop_up_json.details.spoken_languages[j].english_name + ", ";
  }
  
  if (pop_up_json.details.spoken_languages.length > 0) {
    single_string_languages += pop_up_json.details.spoken_languages[pop_up_json.details.spoken_languages.length - 1].english_name;
  }

    // check for spoken_languages -- length
    if (pop_up_json.details.spoken_languages.length === 0) {
      single_string_languages = "N/A"
  }

  make_genre_string = ""
  for (var j = 0; j < pop_up_json.details.genre_names.length - 1; j++) {
      make_genre_string += pop_up_json.details.genre_names[j] + ", ";
  }
  
  if (pop_up_json.details.genre_names.length > 0) {
    make_genre_string += pop_up_json.details.genre_names[pop_up_json.details.genre_names.length - 1];
  }

    // check for spoken_languages -- length
    if (pop_up_json.details.genre_names.length === 0) {
      make_genre_string = "N/A"
  }

  var pop_up = document.getElementById("myModal" + which_i)
  
    pop_up.innerHTML = `
    <div class="modal-content${which_i}">
      <span class="close${which_i}">&times;</span>
      <div class="mod_main_poster${which_i}"><img src='${pop_up_json.details.backdrop_path}'></div>
      <div class="mod_title${which_i}"><span id="title_modal">${pop_up_json.details.title}</span> <a href='https://www.themoviedb.org/${pop_up_json.details.type_for_info}/${pop_up_json.details.id}' target='_blank'><span id="red_star">&#9432;</span></a></div>
      <div class="mod_year_genre${which_i}">${pop_up_json.details.release_date.slice(
              0,
              4
    )} | ${make_genre_string}</div>
      <div class="mod_votes${which_i}">
        <span id="red_star">&#9733 ${(pop_up_json.details.vote_average/2).toFixed(1)}/5</span> <sup>${pop_up_json.details.vote_count} votes </sup>
      </div>
      <div class="mod_overview${which_i}">
        ${saved_overview}
      </div>
      <div class="mod_languages">Spoken languages: ${single_string_languages}</div>
      <div class="mod_cast_header">Cast</div>
      <div class="mod_cast_cards">
        <div class="mod_cast_row1">
          <div class="mod_actor0"></div>
          <div class="mod_actor1"></div>
          <div class="mod_actor2"></div>
          <div class="mod_actor3"></div>
        </div>
        <div class="mod_cast_row2">
          <div class="mod_actor4"></div>
          <div class="mod_actor5"></div>
          <div class="mod_actor6"></div>
          <div class="mod_actor7"></div>
        </div>
      </div>
      <div class="mod_reviews_header">Reviews</div>
      <div class="mod_review_cards">
        <div class="mod_review0"></div>
        <div class="mod_review1"></div>
        <div class="mod_review2"></div>
        <div class="mod_review3"></div>
        <div class="mod_review4"></div>
      </div>
    </div>
  `

  var modal = document.getElementById("myModal"+which_i);
  var btn = document.getElementById("card_show_more_button"+which_i);
  var span = document.getElementsByClassName("close"+which_i)[0];

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // can_call_cast = true
  can_call_cast_function();

}


function can_call_cast_function() {  
  var count_casting = pop_up_json.credits.length

  if (count_casting == 0) {
    document.getElementsByClassName("mod_cast_cards")[0].innerHTML = `N/A`
  }

  for (var cc = 0; cc < count_casting; cc++) {

    if (pop_up_json.credits[cc].profile_path == null) {
      document.querySelector(".mod_actor" + cc.toString()).innerHTML = `
        <div class="castImage">
          <img src='person-placeholder.png' height="270px">
        </div>
        <div class="castName">
          <div class="cast_realName single-line-truncate"><b>${pop_up_json.credits[cc].name}</b></div>
          <div>AS</div>
          <div class="cast_charName single-line-truncate">${pop_up_json.credits[cc].character}</div>
        </div>
    `
    }

    else {
      document.querySelector(".mod_actor" + cc.toString()).innerHTML = `
        <div class="castImage">
          <img src='https://image.tmdb.org/t/p/w500/${pop_up_json.credits[cc].profile_path}' height="270px">
        </div>
        <div class="castName">
          <div class="cast_realName single-line-truncate"><b>${pop_up_json.credits[cc].name}</b></div>
          <div>AS</div>
          <div class="cast_charName single-line-truncate">${pop_up_json.credits[cc].character}</div>
        </div>
    `
    }
  }

  // set div height - according to count casting numbers
  if (count_casting > 0 && count_casting <= 4) {
    document.getElementsByClassName('mod_cast_row1')[0].style.height = '360px';
  }
  else if (count_casting > 4 && count_casting <= 8) {
    document.getElementsByClassName('mod_cast_row1')[0].style.height = '360px';
    document.getElementsByClassName('mod_cast_row2')[0].style.height = '360px';
  }

  var count_reviews = pop_up_json.reviews.length;

  if (count_reviews == 0) {
    document.getElementsByClassName("mod_review_cards")[0].innerHTML = `N/A`
  }

  for (var cr = 0; cr < count_reviews; cr++) { 

    document.querySelector(".mod_review" + cr.toString()).innerHTML = `
      <div class="rev_username_date">
        <span><b>${pop_up_json.reviews[cr].username}</b></span>
        <span id="datess">on ${pop_up_json.reviews[cr].created_at.slice(5, 7)}/${pop_up_json.reviews[cr].created_at.slice(8, 10)}/${ pop_up_json.reviews[cr].created_at.slice(0,4)}</span>
      </div>
      <div class="rev_rating${cr}"></div>
      <div class="rev_content${cr} three-line-truncate"></div>
      <hr>
    `

    if ((pop_up_json.reviews[cr].rating).toString() != "None") {
      rr = pop_up_json.reviews[cr].rating
      document.querySelector(".rev_rating" + cr.toString()).innerHTML = `
        <span id="red_star">&#9733 ${(rr/2).toFixed(1)}/5</span>
      `
    }

    if (pop_up_json.reviews[cr].content.length > 0) {
      document.querySelector(".rev_content" + cr.toString()).innerHTML = `
        ${pop_up_json.reviews[cr].content}
      `
    }
  }
}

