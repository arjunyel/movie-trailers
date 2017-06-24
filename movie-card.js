"use strict";
class MovieCard extends HTMLElement {
    constructor() {
        super();
        const t = document.currentScript.ownerDocument.getElementById("movie-card");
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(t.content.cloneNode(true));
    }
    get oberservedAttributes() {
        return ["title", "poster_image_url", "trailer_youtube_url"];
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
                title.textContent = this.getAttribute("title");
            }
        }
        else {
            this.removeAttribute("title");
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
        else {
            console.log(newVal);
        }
    }
    connectedCallback() {
        this.title = this.getAttribute("title");
    }
}
window.customElements.define("movie-card", MovieCard);
