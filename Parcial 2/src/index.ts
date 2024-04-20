import { AtributteCard } from "./components/CardCat/CardCat";
import "./components/export"
import { phraseCats } from "./services/getPhraseCat";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const data = await phraseCats();
        data.forEach( (data: any) => {
        data.setAtributte(AtributteCard.image, data.img);
        data.setAtributte(AtributteCard.phrase, data.name);
        data.setAtributte(AtributteCard.factCat, data.fact);
        });
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <h1>Cats Facts</h1>
            <card-cat></card-cat>
            </section>
            `
        }
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer);