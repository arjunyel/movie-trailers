"""This module defines the Movie object"""

class Movie:
    """This class implements the Movie object

    Attributes:
        title (str): The movie title.
        poster_image_url (str): The URL of the poster image.
        trailer_youtube_url (str): The Youtube URL of the trailer.
    """
    def __init__(self, title, poster_image_url, trailer_youtube_url):
        self.title = title
        self.poster_image_url = poster_image_url
        self.trailer_youtube_url = trailer_youtube_url
