class header extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <header class="header flex wrap-container">
            <a class="logo flex gap_9" href="index.html">
                <img alt="Logotype" src="./assert/img/Icon.svg">
                <p class="text_md text_bold color_primary">PrimePay.</p>
            </a>
            <nav>
                <ul class="flex gap_25 list">
                    <li><a class="menu-label font-family_inter list" href="#">About Us </a></li>
                    <li><a class="menu-label font-family_inter" href="protected.html">Features</a></li>
                    <li><a class=" menu-label font-family_inter" href="blog-single.html">Pricing</a></li>
                    <li><a class="menu-label font-family_inter" href="blog.html">Blog</a></li>
                </ul>
            </nav>
            <button class="button_md button_primary">login</button>
        </header>
        `
    }
}

customElements.define('header-labs', header)