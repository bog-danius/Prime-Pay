document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var navList = document.getElementById('nav-list');

    mobileMenu.addEventListener('click', function () {
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
        }
    });
});