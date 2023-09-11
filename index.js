const menu = document.getElementById("menu");
const circleContainer = document.getElementById("circle-container");

let count = 0; // Счетчик маленьких кругов

menu.addEventListener("click", () => {
    if (count < 6) {
        const angle = (count * 360 / 6)  // Расположение маленьких кругов вокруг круглого меню
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(100px)`;
        circleContainer.appendChild(circle);

        setTimeout(() => {
            circle.style.opacity = "1";
        }, 100);

        count++;
    }
});