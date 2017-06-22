"""This module allows you to a list containing your movie library"""

from media import Movie

def get_movies():
    movies = []
    add_movie(movies,
              "Toy Story 3",
              "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
              "https://www.youtube.com/watch?v=ZZv1vki4ou4")
    add_movie(movies,
              "Finding Nemo",
              "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
              "https://www.youtube.com/watch?v=wZdpNglLbt8")
    return movies

def add_movie(movies, title, poster_image_url, trailer_youtube_url):
    movie = Movie(title, poster_image_url, trailer_youtube_url)
    movies.append(movie)
