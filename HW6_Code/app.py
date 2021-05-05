from flask import Flask, request, jsonify
import requests
import json
app = Flask(__name__, static_url_path='')

# TMDB API KEY - 96c4dbe355e954e689f15dae0862f68d

global id_type
id_type = {}
global moviegenre_id_name
moviegenre_id_name = {}
global tvgenre_id_name
tvgenre_id_name = {}
global id_overview
id_overview = {}


@app.route("/")
def index():
    return app.send_static_file("home.html")


@app.route("/home", methods=['GET'])
def home():

    final_json = {}  # will return this later -- every data

    # 2.1.1 TMDB Trending Endpoint
    trending_movies = requests.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=96c4dbe355e954e689f15dae0862f68d")
    # top 5 trending results - array with 5 json movies info
    get_json_data = json.loads(trending_movies.text)
    get_top_5_array = get_json_data['results'][:5]
    trending5movies = []
    for each_object in get_top_5_array:
        new_dict = {}
        for k, v in each_object.items():
            if k in ["title", 'backdrop_path', "release_date"]:
                new_dict[k] = v

        trending5movies.append(new_dict)

    # 2.1.2 TMDB TV Airing Today
    tv_airing = requests.get(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=96c4dbe355e954e689f15dae0862f68d")
    # top 5 trending results - array with 5 json shows info
    get_json_data2 = json.loads(tv_airing.text)
    get_top_5_array2 = get_json_data2['results'][:5]
    trending5shows = []
    for each_object in get_top_5_array2:
        new_dict = {}
        for k, v in each_object.items():
            if k in ["name", "backdrop_path", "first_air_date"]:
                new_dict[k] = v

        trending5shows.append(new_dict)

    # make rating ---- from 5 instead of 10 - scale it down

    # creating final_json dictionary
    final_json['trending_movies_top_5'] = trending5movies
    final_json['trending_shows_top_5'] = trending5shows

    response = jsonify(final_json)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


# search route - collect query
@app.route("/search/", methods=['GET'])
def search():

    # 2.2 search tab API calls
    # keyword and category
    key = str(request.args.get('keyword'))
    cat = str(request.args.get('category'))  # movie, tv or both

    # print(key, "and ", cat)

    # modify key -- replace spaces => '%20'
    new_key = ""
    for k in key:
        if k == " ":
            new_key += '%20'
        else:
            new_key += k

    # EXTRACTING GENRES FROM GENRE ID
    moviegenre = requests.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")
    moviegenre_json = json.loads(moviegenre.text)
    genre_id_name_list = moviegenre_json['genres']  # list

    for obj in genre_id_name_list:
        moviegenre_id_name[obj['id']] = obj['name']

    tvgenre = requests.get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")
    tvgenre_json = json.loads(tvgenre.text)
    genre_id_name_list = tvgenre_json['genres']  # list

    for obj in genre_id_name_list:
        tvgenre_id_name[obj['id']] = obj['name']

    # 2.3.1 - search movie endpoint
    if cat == "movie":
        count = 0
        load_api = requests.get(
            "https://api.themoviedb.org/3/search/movie?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&query=" + new_key + "&page=1&include_adult=false")
        if 'results' not in json.loads(load_api.text):
            json.loads(load_api.text)['results'] = []

        load_json_api = json.loads(load_api.text)['results']

        each_movie_search = []
        for each_object in load_json_api:
            new_dict = {}
            new_dict['genre_names'] = []
            id_overview[each_object['id']] = each_object['overview']
            for k, v in each_object.items():
                if k in ["id", "title", "overview", "poster_path", "release_date", "vote_average", "vote_count"]:
                    new_dict[k] = v
                if k == "genre_ids":
                    for ii in v:
                        if ii in moviegenre_id_name:
                            get_genre_name = moviegenre_id_name[ii]
                            new_dict['genre_names'].append(get_genre_name)

                if k == "id":
                    id_type[v] = "movie_id"

            # NULL CHECKS
            if 'title' not in new_dict:
                new_dict['title'] = "N/A"
            if 'overview' not in new_dict:
                new_dict['overview'] = "N/A"
            if 'vote_average' not in new_dict:
                new_dict['vote_average'] = "N/A"
            if 'vote_count' not in new_dict:
                new_dict['vote_count'] = "N/A"
            if 'release_date' not in new_dict:
                new_dict['release_date'] = "N/A "
            # NULL CHECKS FOR VALUES
            if new_dict['title'] == "":
                new_dict['title'] = "N/A"
            if new_dict['overview'] == "":
                new_dict["overview"] = "N/A"
            if new_dict['vote_average'] == "":
                new_dict['vote_average'] = "N/A"
            if new_dict['vote_count'] == "":
                new_dict['vote_count'] = "N/A"
            if new_dict['release_date'] == "":
                new_dict['release_date'] = "N/A "

            each_movie_search.append(new_dict)
            count += 1

            if count == 10:
                break

    # 2.3.2 - search tv endpoint
    elif cat == "tv":
        count = 0
        load_api = requests.get(
            "https://api.themoviedb.org/3/search/tv?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1&query=" + new_key + "&include_adult=false")
        if 'results' not in json.loads(load_api.text):
            json.loads(load_api.text)['results'] = []

        load_json_api = json.loads(load_api.text)['results']

        each_tv_search = []
        for each_object in load_json_api:
            new_dict = {}
            new_dict['genre_names'] = []
            id_overview[each_object['id']] = each_object['overview']
            for k, v in each_object.items():
                if k in ["id", "name", "overview", "poster_path", "first_air_date", "vote_average", "vote_count"]:
                    new_dict[k] = v
                if k == "genre_ids":
                    for ii in v:
                        if ii in tvgenre_id_name:
                            get_genre_name = tvgenre_id_name[ii]
                            new_dict['genre_names'].append(get_genre_name)

                if k == "id":
                    id_type[v] = "tv_id"

            # NULL CHECKS
            if 'title' not in new_dict:
                new_dict['title'] = "N/A"
            if 'overview' not in new_dict:
                new_dict['overview'] = "N/A"
            if 'vote_average' not in new_dict:
                new_dict['vote_average'] = "N/A"
            if 'vote_count' not in new_dict:
                new_dict['vote_count'] = "N/A"
            if 'first_air_date' not in new_dict:
                new_dict['first_air_date'] = "N/A "
            # NULL CHECKS FOR VALUES
            if new_dict['title'] == "":
                new_dict['title'] = "N/A"
            if new_dict['overview'] == "":
                new_dict["overview"] = "N/A"
            if new_dict['vote_average'] == "":
                new_dict['vote_average'] = "N/A"
            if new_dict['vote_count'] == "":
                new_dict['vote_count'] = "N/A"
            if new_dict['first_air_date'] == "":
                new_dict['first_air_date'] = "N/A "

            each_tv_search.append(new_dict)
            count += 1

            if count == 10:
                break

    # 2.3.3 - multi search endpoint
    elif cat == "both":
        count = 0
        load_api = requests.get(
            "https://api.themoviedb.org/3/search/multi?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&query=" + new_key + "&page=1&include_adult=false")
        if 'results' not in json.loads(load_api.text):
            json.loads(load_api.text)['results'] = []

        load_json_api = json.loads(load_api.text)['results']

        each_multi_search = []

        for each_object in load_json_api:
            if each_object['media_type'] == "movie" or each_object['media_type'] == "tv":
                new_dict = {}
                new_dict['genre_names'] = []
                id_overview[each_object['id']] = each_object['overview']
                if 'title' in each_object:
                    # movie
                    for k, v in each_object.items():
                        if k in ["id", "title", "overview", "poster_path", "release_date", "vote_average", "vote_count"]:
                            new_dict[k] = v
                        if k == "genre_ids":
                            for ii in v:
                                if ii in moviegenre_id_name:
                                    get_genre_name = moviegenre_id_name[ii]
                                    new_dict['genre_names'].append(
                                        get_genre_name)

                        if k == "id":
                            id_type[v] = "movie_id"

                elif 'name' in each_object:
                    # tv show
                    for k, v in each_object.items():
                        if k in ["id", "name", "overview", "poster_path", "first_air_date", "vote_average", "vote_count"]:
                            new_dict[k] = v
                        if k == "genre_ids":
                            for ii in v:
                                if ii in tvgenre_id_name:
                                    get_genre_name = tvgenre_id_name[ii]
                                    new_dict['genre_names'].append(
                                        get_genre_name)

                        if k == "id":
                            id_type[v] = "tv_id"

                # NULL CHECKS FOR KEYS
                if 'title' not in new_dict:
                    new_dict['title'] = "N/A"
                if 'overview' not in new_dict:
                    new_dict['overview'] = "N/A"
                if 'vote_average' not in new_dict:
                    new_dict['vote_average'] = "N/A"
                if 'vote_count' not in new_dict:
                    new_dict['vote_count'] = "N/A"

                if 'release_date' not in new_dict and 'first_air_date' not in new_dict:
                    new_dict['release_date'] = "N/A"
                if 'release_date' in new_dict:
                    if new_dict['release_date'] == "":
                        new_dict['release_date'] = "N/A"
                if 'first_air_date' in new_dict:
                    if new_dict['first_air_date'] == "":
                        new_dict['first_air_date'] = "N/A"

                # NULL CHECKS FOR VALUES
                if new_dict['title'] == "":
                    new_dict['title'] = "N/A"
                if new_dict['overview'] == "":
                    new_dict["overview"] = "N/A"
                if new_dict['vote_average'] == "":
                    new_dict['vote_average'] = "N/A"
                if new_dict['vote_count'] == "":
                    new_dict['vote_count'] = "N/A"

                each_multi_search.append(new_dict)
                count += 1

                if count == 10:
                    break

    final_json = {}

    if cat == 'movie':
        final_json['search_for'] = each_movie_search
    elif cat == 'tv':
        final_json['search_for'] = each_tv_search
    elif cat == 'both':
        final_json['search_for'] = each_multi_search

    response = jsonify(final_json)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/show_more/', methods=['GET'])
def show_more():

    # movie_id or tv_id -- extract
    some_id = str(request.args.get('id'))
    string_id = int(some_id)
    get_type = id_type[string_id]

    final_show_more_json = {}

    if get_type == "movie_id":
        # 2.4 - SHOW MORE POPUP
        # get movie details API
        movie_details = requests.get(
            "https://api.themoviedb.org/3/movie/" + some_id + "?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")

        get_json_data = json.loads(movie_details.text)
        return_with_details = {}
        return_with_details['type_for_info'] = 'movie'
        return_with_details['genre_names'] = []
        return_with_details['release_date'] = "N/A"
        return_with_details['title'] = 'N/A'
        return_with_details["overview"] = id_overview[get_json_data['id']]
        if return_with_details['overview'] is None:
            return_with_details['overview'] = "N/A"

        for k, v in get_json_data.items():
            if k in ["id", "title", "runtime", "release_date", "spoken_languages", "vote_average", "vote_count", "poster_path", "backdrop_path"]:
                return_with_details[k] = v
            if k == "backdrop_path":
                if v == None:
                    return_with_details['backdrop_path'] = "movie_placeholder.jpg"
                else:
                    store_v = v
                    return_with_details['backdrop_path'] = "https://image.tmdb.org/t/p/w780/" + store_v
            if k == "genres":
                for ii in v:
                    return_with_details['genre_names'].append(ii['name'])
            if k == 'release_date':
                if v == "":
                    return_with_details['release_date'] = "N/A"
            if k == 'title':
                if v == "":
                    return_with_details['title'] = "N/A"

        print("return_with_details: ", return_with_details)
        final_show_more_json["details"] = return_with_details

        # get movie credits API
        movie_credits = requests.get(
            "https://api.themoviedb.org/3/movie/" + some_id + "/credits?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")

        get_json_data = json.loads(movie_credits.text)
        casting_team = get_json_data['cast']

        count = 0
        return_with_credits_array = []
        for each_dict in casting_team:
            hashmap = {}
            for k, v in each_dict.items():
                if k in ["name", "profile_path", "character"]:
                    hashmap[k] = v

            return_with_credits_array.append(hashmap)
            count += 1

            if count == 8:
                break

        final_show_more_json["credits"] = return_with_credits_array

        # get movie reviews API
        movie_reviews = requests.get(
            "https://api.themoviedb.org/3/movie/" + some_id + "/reviews?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1")

        get_json_data = json.loads(movie_reviews.text)
        all_reviews = get_json_data['results']

        return_with_reviews_array = []
        count = 0
        for each_dict in all_reviews:
            hashmap = {}
            for k, v in each_dict.items():
                if k in ["content", "created_at"]:
                    hashmap[k] = v
                if k == "author_details":
                    # v is another dict
                    for kk, vv in v.items():
                        if kk in ["username", "rating"]:
                            hashmap[kk] = vv

            if "rating" not in hashmap:
                hashmap["rating"] = ""

            if len(str(hashmap['rating'])) == 0:
                hashmap["rating"] = ""
            elif len(str(hashmap['rating'])) > 0:
                store = str(hashmap['rating'])
                hashmap["rating"] = store

            return_with_reviews_array.append(hashmap)
            count += 1

            if count == 5:
                break

        final_show_more_json["reviews"] = return_with_reviews_array

    else:
        # get TV show details API
        tv_details = requests.get(
            "https://api.themoviedb.org/3/tv/" + some_id + "?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")

        get_json_data = json.loads(tv_details.text)
        return_with_details = {}
        return_with_details['genre_names'] = []
        return_with_details['type_for_info'] = 'tv'
        return_with_details['release_date'] = "N/A"
        return_with_details['title'] = 'N/A'
        return_with_details["overview"] = id_overview[get_json_data['id']]
        if return_with_details['overview'] is None:
            return_with_details['overview'] = "N/A"

        for k, v in get_json_data.items():
            if k in ["backdrop_path", "episode_run_time", "id", "number_of_seasons", "overview", "poster_path", "spoken_languages", "vote_average", "vote_count"]:
                return_with_details[k] = v
            if k == "backdrop_path":
                if v is None:
                    return_with_details['backdrop_path'] = "movie_placeholder.jpg"
                else:
                    store_v = v
                    return_with_details['backdrop_path'] = "https://image.tmdb.org/t/p/w780/" + store_v
            if k == "name":
                return_with_details['title'] = v
                if v == "":
                    return_with_details['title'] = "N/A"
            if k == "first_air_date":
                return_with_details['release_date'] = v
                if v is None:
                    return_with_details['release_date'] = "N/A"
            if k == "genres":
                for ii in v:
                    return_with_details['genre_names'].append(ii['name'])
            if k == 'release_date':
                if v == "":
                    return_with_details['release_date'] = "N/A"

        final_show_more_json["details"] = return_with_details

        # get TV show credits API
        tv_credits = requests.get(
            "https://api.themoviedb.org/3/tv/" + some_id + "/credits?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US")

        get_json_data = json.loads(tv_credits.text)
        casting_team = get_json_data['cast']

        return_with_credits_array = []
        count = 0
        for each_dict in casting_team:
            hashmap = {}
            for k, v in each_dict.items():
                if k in ["name", "profile_path", "character"]:
                    hashmap[k] = v

            return_with_credits_array.append(hashmap)
            count += 1

            if count == 8:
                break

        final_show_more_json["credits"] = return_with_credits_array

        # get TV show reviews API
        tv_reviews = requests.get(
            "https://api.themoviedb.org/3/tv/" + some_id + "/reviews?api_key=96c4dbe355e954e689f15dae0862f68d&language=en-US&page=1")

        get_json_data = json.loads(tv_reviews.text)
        all_reviews = get_json_data['results']

        return_with_reviews_array = []
        count = 0
        for each_dict in all_reviews:
            hashmap = {}
            for k, v in each_dict.items():
                if k in ["content", "created_at"]:
                    hashmap[k] = v
                if k == "author_details":
                    # v is another dict
                    for kk, vv in v.items():
                        if kk in ["username", "rating"]:
                            hashmap[kk] = vv

            if "rating" not in hashmap:
                hashmap["rating"] = ""

            if len(str(hashmap['rating'])) == 0:
                hashmap["rating"] = ""
            elif len(str(hashmap['rating'])) > 0:
                store = str(hashmap['rating'])
                hashmap["rating"] = store

            return_with_reviews_array.append(hashmap)
            count += 1

            if count == 5:
                break

        final_show_more_json["reviews"] = return_with_reviews_array

    response = jsonify(final_show_more_json)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


# just like nodemon
# instead of flask run ---- use python app.py (normally)
if __name__ == '__main__':
    app.run()
