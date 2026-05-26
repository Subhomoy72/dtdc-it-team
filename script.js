// Floating Stars

const body = document.body;

for (let i = 0; i < 80; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    body.appendChild(star);
}



// Mouse Glow Effect

document.addEventListener("mousemove", (e) => {

    const background =
        document.querySelector(".background");

    const x =
        (window.innerWidth - e.pageX * 2) / 100;

    const y =
        (window.innerHeight - e.pageY * 2) / 100;

    background.style.transform =
        `translate(${x}px, ${y}px)`;

});