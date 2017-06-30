"""This module creates a list of movie objects using TMDB api"""
import http.client
import json
from media import Movie
from key import TMDB_KEY

def get_movies():
    """Reads movies.txt and returns a list containing the titles of your favorite movie"""
    movies = []
    titles = open("movies.txt").read().splitlines()
    return add_movies(movies, titles)

def add_movies(movies, titles):
    """Gets movie info based on the title and appends it to a list"""
    if TMDB_KEY == "INSERT_API_KEY": # Uses https://www.themoviedb.org/
        print("Please use a valid api key!")
        exit()
    conn = http.client.HTTPSConnection("api.themoviedb.org") # One connection all requests share
    payload = "{}" # Sending an empty payload
    for title in titles:
        titlefmt = title.replace(' ', '%20') # Replace spaces with API friendly %20
        query = "/3/search/movie?include_adult=false&page=1&query="+titlefmt+"&language=en-US&api_key="+TMDB_KEY
        conn.request("GET", query, payload)
        movie = json.loads(conn.getresponse().read().decode('utf8')) # Read response from API
        if not movie['results']: # If no results were found
            print(title + " not found!")
            continue
        movieid = str(movie['results'][0]['id']) # Get ID of the best match to find video

        query = "/3/movie/"+movieid+"/videos?language=en-US&api_key="+TMDB_KEY
        conn.request("GET", query, payload)
        video = json.loads(conn.getresponse().read().decode('utf8'))
        videokey = ""
        poster = ""
        if video['results']: # These if statments check if the poster img or video dont exist
            videokey = video['results'][0]['key']
        if movie['results'][0]['poster_path']:
            poster = "https://image.tmdb.org/t/p/w185"+ movie['results'][0]['poster_path']
        movie = Movie(movie['results'][0]['title'], poster, videokey) # Assumes title always exists
        movies.append(movie)
    return movies
