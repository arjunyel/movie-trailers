"use strict";
// <movie-card></movie-card>
const importedDoc = document.currentScript.ownerDocument;
class MovieCard extends HTMLElement {
    // This is a reusable movie card web component https://www.webcomponents.org/introduction
    constructor() {
        super(); // always call super() first in the ctor.
        const t = importedDoc.getElementById("movie-card");
        const shadowRoot = this.attachShadow({ mode: "open" }); // Open shadow root
        shadowRoot.appendChild(t.content.cloneNode(true)); // Append movie-card.html to the shadow root
    }
    get oberservedAttributes() {
        return ["title", "poster", "youtube"];
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
            const title = this.__getNode("#movie");
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
            const poster = this.__getNode("#picture") || null;
            if (poster) {
                // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                poster.src = this.getAttribute("poster");
            }
        }
        else {
            this.removeAttribute("poster");
        }
    }
    get youtube() {
        const youtube = this.getAttribute("youtube");
        if (youtube) {
            return youtube;
        }
        return "";
    }
    set youtube(y) {
        if (y) {
            this.setAttribute("youtube", y);
        }
        else {
            this.removeAttribute("youtube");
        }
    }
    __getNode(id) {
        // This is a helper function that returns the element (by id) or null
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
        else if (attr === "youtube") {
            this.youtube = newVal;
        }
    }
    connectedCallback() {
        // Take our inital settings and apply them
        this.title = this.getAttribute("title");
        this.poster = this.getAttribute("poster");
        this.youtube = this.getAttribute("youtube");
    }
}
window.customElements.define("movie-card", MovieCard);
