class mininews extends HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute('name');
        const text = this.getAttribute('text');
        const img = this.getAttribute('img');
        const data = this.getAttribute('data');
        const work = this.getAttribute('work')

        this.innerHTML = `
        <div class="mini-latest-news gap_15">
            <img src="${img}" class="angle">
            <div class="flex-column">
                <div class="work margin-bottom_30">
                    <p class="work-text">${work}</p>
                </div>
                <p class="mini-latest-news-text">${text}</p>
                <div class="latest-news-footer gap_15">
                    <p class="latest-news-data">${data}</p>
                    <div class="latest-news-dot"></div>
                    <p class="latest-news-name">${name}</p>
                </div>
            </div>
            
        </div>
        `
    }
}
customElements.define('mini-latest-news' , mininews);