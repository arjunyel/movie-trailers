// <movie-card></movie-card>
class MovieCard extends HTMLElement {
    // title, poster_image_url, trailer_youtube_url

    get oberservedAttributes() {
         return ["title", "poster_image_url", "trailer_youtube_url"];
     }

    public get title(): string {
        const title = this.getAttribute("value");
        if (title) {
            return title;
        }
        return "";
    }

    public set title(t: string) {
         if (t) {
             this.setAttribute("title", t);
             const title = this.getNode("title");
             if (title) {
                 // The next line uses getAttribute instead of the t variable to allow concurrent access to the DOM
                 title.textContent = this.getAttribute("t");
             }
         } else {
             this.removeAttribute("value");
         }
     }

    constructor() {
        super(); // always call super() first in the ctor.
        const t = document.currentScript.ownerDocument.getElementById("movie-card") as HTMLTemplateElement;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(t.content.cloneNode(true));
    }

    private getNode(id: string): HTMLElement|null {
        const shadow = this.shadowRoot as ShadowRoot;
        return shadow.getElementById(id);
    }

    private attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
        
    }
}

window.customElements.define("movie-card", MovieCard);
