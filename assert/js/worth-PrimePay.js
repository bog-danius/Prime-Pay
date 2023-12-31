class Worth extends HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute('name');
        const text = this.getAttribute('text');
        const img = this.getAttribute('img')

        this.innerHTML = `
        <div class="container1-block flex-column gap_20 text_xs padding_45">
            <div class="container1-block-image flex">
               <img src="${img}" alt="container-img">
            </div>
                <div class="container1-block-text flex ">
                   <p class="container1-block1-logo text_lg">${name}</p>
                   <p class="container1-block1-text ">${text}</p>
                </div>
        </div>
        `
    }
}
customElements.define('worth-primepay' , Worth);

