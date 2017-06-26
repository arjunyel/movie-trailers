"""This module allows you to a list containing your movie library"""
import http.client
import json
from media import Movie
from key import TMDB_KEY

def get_movies():
    """Returns a list containing your favorite movies"""
    movies = []
    titles = open("movies.txt").read().splitlines()
    return add_movies(movies, titles)

def add_movies(movies, titles):
    """This is a helper function to search for creating a Movie object using an api then appending it to the list"""
    conn = http.client.HTTPSConnection("api.themoviedb.org")
    payload = "{}"
    for title in titles:
        titlefmt = title.replace(' ', '%20')
        query = "/3/search/movie?include_adult=false&page=1&query="+titlefmt+"&language=en-US&api_key="+TMDB_KEY
        conn.request("GET", query, payload)
        movie = json.loads(conn.getresponse().read().decode('utf8'))
        if not movie['results']:
            print(title + " not found!")
            break
        movieid = str(movie['results'][0]['id'])

        query = "/3/movie/"+movieid+"/videos?language=en-US&api_key="+TMDB_KEY
        conn.request("GET", query, payload)
        video = json.loads(conn.getresponse().read().decode('utf8'))

        poster = "https://image.tmdb.org/t/p/w185"+ movie['results'][0]['poster_path']
        movie = Movie(movie['results'][0]['title'], poster, video['results'][0]['key'])
        movies.append(movie)
    return movies
