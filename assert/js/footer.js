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
                    <a class="footer-menu-logo" href="#">Menu</a>
                    <a class="footer-menu-text" href="#">About</a>
                    <a class="footer-menu-text" href="protected.html">Features</a>
                    <a class="footer-menu-text" href="blog-single.html">Pricing</a>
                    <a class="footer-menu-text" href="blog.html">Blog</a>
                    <a class="footer-menu-text" href="#">How it Work</a>
                </div>
                <div class="footer-menu-1">
                    <a class="footer-menu-logo" href="#">Utility pages</a>
                    <a class="footer-menu-text" href="#">Style guide</a>
                    <a class="footer-menu-text" href="#">Password protected</a>
                    <a class="footer-menu-text" href="404.html">404 Not found</a>
                    <a class="footer-menu-text" href="licenses.html">licenses</a>
                    <a class="footer-menu-text" href="#">Changelog</a>
                </div>
                <div class="footer-menu-1">
                    <a class="footer-menu-logo" href="#">Address</a>
                    <a class="footer-menu-text empty-line" href="#">1700 W Blancke St, kiyev port south USA, America</a>

                    <a class="footer-menu-text" href="#">+3255 456 789</a>
                    <a class="footer-menu-text" href="#">mail@primpay.com</a>
                    <button class="footer-button">GET A QUOTE</button>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('footer-labs', footer)