import styles from "./CardCat.css"

export enum AtributteCard {
    "image" = "image",
    "phrase" = "phrase",
    "factCat" = "factCat",
}

class CardCat extends HTMLElement {
image?: string;
phrase?: string;
factCat?: string;

constructor(){
    super();
    this.attachShadow({mode: "open"});
}

static get observedAttributes() {
const atrs: Record<AtributteCard, null> = {
    image: null,
    phrase: null,
    factCat: null,
}
    return Object.keys(atrs)
}

connectedCallback(){
this.render();
}

attributeChangedCallback( propName: AtributteCard, oldValue: string | undefined, newValue: AtributteCard){
    switch(propName){
        default:
        this[propName] = newValue;
        break;
    }
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.innerHTML = `
        <figure>
        <div class = "container-image">
        <img src = "${this.image}">
        </div>
        <h4>${this.phrase}</h4>
        <p>${this.factCat}</p>
        <button></button>
        </figure>
        `
    }

    const cssComponent = this.ownerDocument.createElement("style");
    cssComponent.innerHTML = styles
    this.shadowRoot?.appendChild(cssComponent);
}

}

customElements.define("card-cat", CardCat);
export default CardCat;