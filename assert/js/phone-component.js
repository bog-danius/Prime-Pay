const template =
`
    <link href="assert/css/phone.css" rel="stylesheet">
    <div class = "container-widget-phone">
        <div class = "widget-phone">
            <div class = "widget-phone-header"></div>
            <div class = "widget-phone-main">
                <slot></slot>
            </div>
            <div class = "widget-phone-footer">
                <img class="icon" src="assert/img/Icon10.svg">
                <img class="icon" src="assert/img/Icon9.svg">
                <img class="icon" src="assert/img/Icon8.svg">
                <img class="icon" src="assert/img/Icon7.svg">
                <img class="icon" src="assert/img/Icon6.svg">
            </div>
        </div>
    </div>
`
class Phone extends HTMLElement {
    constructor() {
        super()
        .attachShadow({mode:"open"})
            .innerHTML = template;
    }

}
customElements.define("widget-phone", Phone); // (2)