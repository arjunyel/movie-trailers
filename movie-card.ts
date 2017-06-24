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
         return ["title", "poster_image_url", "trailer_youtube_url"];
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



    private getNode(id: string) {
        const shadow = this.shadowRoot as ShadowRoot;
        return shadow.querySelector(id);
    }

    private attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
        if (attr === "title") {
            this.title = newVal;
        } else {
            console.log(newVal);
        }
    }

    private connectedCallback() {
        this.title = this.getAttribute("title") as string;
    }
}

window.customElements.define("movie-card", MovieCard);
