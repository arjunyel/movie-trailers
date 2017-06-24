"use strict";
class MovieCard extends HTMLElement {
    get oberservedAttributes() {
        return ["title", "poster_image_url", "trailer_youtube_url"];
    }
    get title() {
        const title = this.getAttribute("value");
        if (title) {
            return title;
        }
        return "";
    }
    set title(t) {
        if (t) {
            this.setAttribute("title", t);
            const title = this.getNode("title");
            if (title) {
                title.innerHTML = this.getAttribute("t");
            }
        }
        else {
            this.removeAttribute("value");
        }
    }
    constructor() {
        super();
        const t = document.currentScript.ownerDocument.getElementById("movie-card");
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(t.content.cloneNode(true));
    }
    getNode(id) {
        const shadow = this.shadowRoot;
        return shadow.getElementById(id);
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
    }
}
window.customElements.define("movie-card", MovieCard);
