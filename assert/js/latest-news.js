class news extends HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute('name');
        const text = this.getAttribute('text');
        const img = this.getAttribute('img');
        const data = this.getAttribute('data');
        const work = this.getAttribute('work')

        this.innerHTML = `
        <div class="latest-news max-width_700">
            <img src="${img}" class="angle">
            <div class="work margin-top_45">
                <p class="work-text">${work}</p>
            </div>
            <p class="latest-news-text">${text}</p>
            <div class="latest-news-footer gap_15">
                <p class="latest-news-data">${data}</p>
                <div class="latest-news-dot"></div>
                <p class="latest-news-name">${name}</p>
            </div>
        </div>
        `
    }
}
customElements.define('latest-news' , news);