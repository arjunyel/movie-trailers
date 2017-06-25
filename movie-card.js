"use strict";
// <movie-card></movie-card>
class MovieCard extends HTMLElement {
    // title, poster_image_url, trailer_youtube_url
    constructor() {
        super(); // always call super() first in the ctor.
        const t = document.currentScript.ownerDocument.getElementById("movie-card");
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(t.content.cloneNode(true));
    }
    get oberservedAttributes() {
        return ["title", "poster", "trailer_youtube_url"];
    }
    get title() {
        const title = this.getAttribute("title");
        if (title) {
            return title;
        }
        return "";
    }
    set title(t) {
        if (t) {
            this.setAttribute("title", t);
            const title = this.getNode("#movie");
            if (title) {
                // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                title.textContent = this.getAttribute("title");
            }
        }
        else {
            this.removeAttribute("title");
        }
    }
    get poster() {
        const poster = this.getAttribute("poster");
        if (poster) {
            return poster;
        }
        return "";
    }
    set poster(p) {
        if (p) {
            this.setAttribute("poster", p);
            const poster = this.getNode("#picture") || null;
            if (poster) {
                // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                poster.src = this.getAttribute("poster");
            }
        }
        else {
            this.removeAttribute("poster");
        }
    }
    getNode(id) {
        const shadow = this.shadowRoot;
        return shadow.querySelector(id);
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "title") {
            this.title = newVal;
        }
        else if (attr === "poster") {
            this.poster = newVal;
        }
        else {
            console.log(newVal);
        }
    }
    connectedCallback() {
        this.title = this.getAttribute("title");
        this.poster = this.getAttribute("poster");
    }
}
window.customElements.define("movie-card", MovieCard);
