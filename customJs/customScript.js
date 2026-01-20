document.addEventListener(`DOMContentLoaded`, () => {
    const mobileButton = document.getElementById(`mobileBtn`);
    const mobileMenu = document.getElementById(`mobileMenu`);

    mobileButton.addEventListener(`click`, () => {

    //mobile menu toggle
    mobileMenu.classList.toggle(`translate-x-full`);
    mobileButton.classList.toggle(`mobileButton`);
})
})