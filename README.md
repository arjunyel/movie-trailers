# movie-trailers

Statically generate a site to view trailers for your favorite movies. Built with Web standards, Python 3.6, and [The Movie Database API](https://www.themoviedb.org/).

## Getting started

This is project 1 of the [Udacity Full Stack Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004). Only tested in Chrome.

### Prerequisites

| *Required* | Recommended | Optional |
|------------|-------------|----------|
| [Python 3.6.1](https://www.python.org/)           | [Typescript](https://www.typescriptlang.org/)            |[TSLint](https://palantir.github.io/tslint/)          |

### Generating Files

1. Make your list of your favorite 20 movies in source/movies.txt (Limited due to the API)

1. Put your [TMDb API key](https://www.themoviedb.org/documentation/api) into source/key.py

```bash
tsc # If you have Typescript installed
cd source/
python3 fresh_tomatoes.py
```

### Run with Python

```bash
# From base directory
cd generated/
python3 -m http.server
```

Go to [http://localhost:8000](http://localhost:8000)

### Run with Docker

```bash
# From base directory
cd generated/
docker build -t movies:latest .
docker run -d -P movies
docker ps
```

Get the port the container is listening on:

```bash
0.0.0.0:{$PORT}->8000/tcp
```

Then navigate to [http://locahost:{$PORT}](http://locahost:{$PORT)

## Cool Technologies Used

### Web Components

[Web Components](https://www.webcomponents.org/introduction) allow us to create our own custom, reusable, encapsulated HTML tags. In this case we created a movie-card element that go on any website and maintain visual and functional consistency.

```html
<movie-card title="The Iron Giant" poster="IMAGE_URL" youtube="fq2FZdvQXXg"></movie-card>
```

Among other features our movie card has self-contained CSS through [Shadow DOM](https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom), can be used by any framework that manipulates the DOM (such as Angular and React), and its properties can be accessed through Javascript like all other HTML tags.

```javascript
const movies = document.querySelectorAll("movie-card");
    for (const m of movies) {
        console.log(m.title);
    }
```

### Typescript

[Typescript](https://www.typescriptlang.org/) makes the lives of developers easier by adding type checking to Javascript. In the Typescript compiler I turned on the [strict setting](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#new---strict-master-option) to make sure I handled cases of things being null. Another benefit it gave me was auto-completion in [VS Code](https://code.visualstudio.com/) because it understood what properties different tags had.

```typescript
const embed = document.getElementById("embed") as HTMLIFrameElement | null;
        if (embed) { // Check if iframe exits
            embed.src = youtubeID;
            // My text editor understands that this is an IFrame and therefore has a src property.
        }
```

### CSS Grid

[CSS Grid](https://developers.google.com/web/updates/2017/01/css-grid) is a standards based way to layout HTML in a 2d grid. This allowed me to get rid of Bootstrap.

### CSS Custom Properties

The header of the page, along with the background and text color of the movie cards, can be themed with [CSS Custom Properties](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care).

```css
<style>
    :root {
        --text-color: peru;
        --card-color: #fff;
        --header-color: #ff6347;
    }
</style>
```

![Default](/screenshots/default.jpg?raw=true "Default CSS")

```css
<style>
    :root {
        --text-color: white;
        --card-color: black;
        --header-color: gray;
    }
</style>
```

![Alt](/screenshots/alt.jpg?raw=true "Alternative CSS")

### Dialog HTML Element

[This element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) is a standards based way to display a [modal](https://en.wikipedia.org/wiki/Modal_window). Dialog is so new I had to [add the definition to Typescript](https://github.com/Microsoft/TypeScript/issues/16880).

### The Movie Database API

This product uses the [TMDb API](https://www.themoviedb.org/) but is not endorsed or certified by TMDb.
