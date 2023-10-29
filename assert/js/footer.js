class footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <div class="footer">
            <div class="footer-logo">
                <div class="logo">
                    <img class="logo-photo" src="./assert/img/Icon.svg">
                    <p class="text_md">PrimePay.</p>
                </div>
                <p class="footer-logo-text">
                    Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non sagittis aliquam
                    bibendum.
                </p>
                <div class="links">
                    <a class="" href="#"><img src="assert/img/inst.svg"></a>
                    <a class="" href="#"><img src="assert/img/fb.svg"></a>
                    <a class="" href="#"><img src="assert/img/twiter.svg"></a>
                    <a class="" href="#"><img src="assert/img/in.svg"></a>
                    <a class="" href="#"><img src="assert/img/youtube.svg"></a>
                </div>
            </div>
            <div class="footer-line"></div>
            <div class="footer-menu">
                <div class="footer-menu-1">
                    <p class="footer-menu-logo">Menu</p>
                    <p class="footer-menu-text">About</p>
                    <p class="footer-menu-text">Features</p>
                    <p class="footer-menu-text">Pricing</p>
                    <p class="footer-menu-text">Blog</p>
                    <p class="footer-menu-text">How it Work</p>
                </div>
                <div class="footer-menu-1">
                    <p class="footer-menu-logo">Utility pages</p>
                    <p class="footer-menu-text">Style guide</p>
                    <p class="footer-menu-text">Password protected</p>
                    <p class="footer-menu-text">404 Not found</p>
                    <p class="footer-menu-text">licenses</p>
                    <p class="footer-menu-text">Changelog</p>
                </div>
                <div class="footer-menu-1">
                    <p class="footer-menu-logo">Address</p>
                    <p class="footer-menu-text empty-line">1700 W Blancke St, kiyev port south USA, America</p>

                    <p class="footer-menu-text">+3255 456 789</p>
                    <p class="footer-menu-text">mail@primpay.com</p>
                    <button class="footer-button">GET A QUOTE</button>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('footer-labs', footer)