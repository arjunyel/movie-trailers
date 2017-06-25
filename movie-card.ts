// <movie-card></movie-card>
class MovieCard extends HTMLElement {
    // title, poster_image_url, trailer_youtube_url

    constructor() {
        super(); // always call super() first in the ctor.
        const t = document.currentScript.ownerDocument.getElementById("movie-card") as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(t.content.cloneNode(true));
    }

    get oberservedAttributes() {
         return ["title", "poster", "trailer"];
     }

    public get title(): string {
        const title = this.getAttribute("title");
        if (title) {
            return title;
        }
        return "";
    }

    public set title(t: string) {
         if (t) {
             this.setAttribute("title", t);
             const title = this.getNode("#movie");
             if (title) {
                 // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                 title.textContent = this.getAttribute("title") as string;
             }
         } else {
             this.removeAttribute("title");
         }
     }

    public get poster(): string {
        const poster = this.getAttribute("poster");
        if (poster) {
            return poster;
        }
        return "";
    }

    public set poster(p: string) {
         if (p) {
             this.setAttribute("poster", p);
             const poster = this.getNode("#picture") as HTMLImageElement || null;
             if (poster) {
                 // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                 poster.src  = this.getAttribute("poster") as string;
             }
         } else {
             this.removeAttribute("poster");
         }
     }

    private getNode(id: string) {
        const shadow = this.shadowRoot as ShadowRoot;
        return shadow.querySelector(id);
    }

    private attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
        if (attr === "title") {
            this.title = newVal;
        } else if (attr === "poster") {
            this.poster = newVal;
        } else if () {
            console.log(newVal);
        }
    }

    private connectedCallback() {
        this.title = this.getAttribute("title") as string;
        this.poster = this.getAttribute("poster") as string;
    }
}

window.customElements.define("movie-card", MovieCard);
