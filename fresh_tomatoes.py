"""
Generate static index.html

Modified from https://github.com/adarsh0806/ud036_StarterCode/blob/master/fresh_tomatoes.py
"""
from entertainment_center import get_movies


# Styles and scripting for the page
MAIN_PAGE_HEAD = '''
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Fresh Tomatoes</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.ico">

        <!-- See https://goo.gl/qRE0vM -->
        <meta name="theme-color" content="#660000">

        <!-- Import our Web Component -->
        <link rel="import" href="movie-card.html">

        <!-- Setup our event listeners -->
        <script defer src="youtube.js"></script>

        <style>
            :root {
                --text-color: peru;
                --card-color: #fff;
            }

            body {
                background: #E1E2E1;
            }

            .container {
                padding-top: 60px;
                display: grid;
                grid-gap: 30px;
		        grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
                margin: 25px;
            }

            .header {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                height: 50px;
                top: 0px;
                left: 0px;
                background: #616161;
                color: white;
                text-align: center;
            }

            dialog {
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-radius: 6px;
                box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
                width: 640px;
                height: 480px;
            }

            dialog::backdrop {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
            }

            iframe {
                border: none;
                height: 100%;
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
            }

            figure {
                margin: auto;
                text-align: center;
            }
        </style>
    </head>
'''


# The main page layout and title bar
MAIN_PAGE_CONTENT = '''
    <body>
        <header class="header">
            <h2>Fresh Tomatoes</h2>
        </header>
        <noscript>This site requires Javascript</noscript>
        <dialog id="modal"> <!-- Modal that we add youtube iframe to -->
            <iframe id="embed"></iframe>
        </dialog>
        <div class="container">  <!-- This container uses CSS Gride to arrange its children -->
            {movie_tiles} <!-- Output generated <movie-card>'s here -->
        </div>
        <footer>
            <figure>
                <img src="https://www.themoviedb.org/assets/static_cache/bb45549239e25f1770d5f76727bcd7c0/images/v4/logos/408x161-powered-by-rectangle-blue.png" alt="TMDb">
                <figcaption>This product uses the TMDb API but is not endorsed or certified by TMDb. <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a> </figcaption>
            </figure>
        </footer>
    </body>
</html>
'''


# Generate a <movie-card> component with our data
MOVIE_TILE_CONTENT = '''
<movie-card title="{title}" poster="{poster}" youtube="{youtube}"></movie-card>
'''

def create_movie_tiles_content(movies):
    """Generate the <movie-tile> elements"""
    content = '' # The HTML content for this section of the page
    for movie in movies:
        # Append the card for the movie with its content filled in
        content += MOVIE_TILE_CONTENT.format(
            title=movie.title,
            poster=movie.poster,
            youtube=movie.youtube,
        )
    return content


def open_movies_page(movies):
    """Create index.html"""
    # Create or overwrite the output file
    output_file = open('./generated/index.html', 'w')

    # Replace the movie tiles placeholder generated content
    rendered_content = MAIN_PAGE_CONTENT.format(
        movie_tiles=create_movie_tiles_content(movies))

    # Output the file
    output_file.write(MAIN_PAGE_HEAD + rendered_content)
    output_file.close()


MOVIES = get_movies() # Get a list of our favorite movies from movies.txt
open_movies_page(MOVIES) # Generate a website from the list
