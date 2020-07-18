const hamburgerButtons = document.querySelectorAll('.hamburger_box');
class HamburgerMenu {
    constructor(body) {
        this.body = document.getElementById(body);
    }
    toggle() {
        this.body.classList.toggle('mobile_menu_open')
        this.body.classList.toggle('mobile_menu_close')
    }
}

const hamburger = new HamburgerMenu("body");
hamburgerButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        hamburger.toggle();
    })
});