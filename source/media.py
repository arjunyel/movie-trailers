"""This module defines the Movie object"""

class Movie:
    """This class implements the Movie object

    Attributes:
        title (str): The movie title.
        poster (str): The URL of the poster image.
        youtube (str): The Youtube URL of the trailer.
    """
    def __init__(self, title, poster, youtube):
        self.title = title
        self.poster = poster
        self.youtube = youtube
