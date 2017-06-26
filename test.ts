function cardInfo() {
    const movies = document.querySelectorAll("movie-card") as NodeListOf<MovieCard>;
    for (const m of movies) {
        console.log(m.title);
    }
}
cardInfo();
