class PhoneTransferComponent extends HTMLElement {
    constructor() {
        super();

        const price = this.getAttribute('price');
        const target = this.getAttribute('target');
        const type = this.getAttribute('type');
        const color = this.getAttribute('color'); // "red"

        const iconStyle = `background-color: ${color}`; // "background-color: red"

        this.innerHTML = `
        <div class = "phone-transfer-component grid gap_16">
            <div class = "phone-transfer-component-icon" style = "${iconStyle}"></div>
            <div class = "phone-transfer-component-info">
                <p class = "phone-transfer-component-info-title text_bold color_dark">${target}</p>
                <p class = "phone-transfer-component-info-label">${type}</p>
            </div>
            <p class = "phone-transfer-component-price">${price}</p>
        </div>
        `
    }
}


customElements.define('widget-phone-transfer', PhoneTransferComponent);

