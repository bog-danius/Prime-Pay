class email extends HTMLElement{
    constructor() {
        super();
        this.innerHTML=`
        <div class="email">
            <p class="email-text-logo">Take control of your personal <span
                    class="creat-card-logo-name">finances today</span>
            </p>
            <div class="email-reg">
                <div class="registration-container">
                    <input class="registration-password" id="emailuser" name="username" required type="text" placeholder="Enter your email">
                </div>
                <button class="email-button">Subscribe</button>
            </div>
        </div>
        `
    }
}
customElements.define('email-labs', email)