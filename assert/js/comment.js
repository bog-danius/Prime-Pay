class Comment extends  HTMLElement {
    constructor() {
        super();

        const name = this.getAttribute('name');
        const fam = this.getAttribute('fam');
        const text = this.getAttribute('text');
        const img = this.getAttribute('img');

        this.innerHTML = `
        <div class="comment">
            <div class="comment-player flex">
                <div class="comment-player-info flex gap_15">
                    <img class="comment-player-photo" src="assert/img/avatar3.png">
                        <div>
                            <p class="comment-player-name text_lg">${name}</p>
                            <p class="comment-player-work">${fam}</p>
                        </div>
                </div>
                <div class="comment-grade">
                    <img src="assert/img/star.svg">
                </div>
            </div>
            <div class="horizontal-line"></div>
            <p class="comment-text text_lg">${text}</p>
        </div>
        `
    }
}
customElements.define('widget-comment', Comment);