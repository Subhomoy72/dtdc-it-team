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
/* DTDC Banner Pulse */

const banner = document.querySelector(".dtdc-banner");

if(banner){

    setInterval(()=>{

        banner.style.filter =
        "drop-shadow(0 0 35px rgba(0,191,255,.8))";

        setTimeout(()=>{

            banner.style.filter =
            "drop-shadow(0 0 15px rgba(0,191,255,.4))";

        },500);

    },4000);
}
/* AI Drone Follow Effect */

const drone = document.querySelector(".ai-drone");

document.addEventListener("mousemove", (e) => {

    drone.style.transform =
        `translate(${e.clientX * 0.01}px,
                   ${e.clientY * 0.01}px)`;

});
/* Hologram Pulse */

setInterval(() => {

    const core = document.querySelector(".dtdc-core");

    if(core){

        core.style.opacity = "0.30";

        setTimeout(() => {

            core.style.opacity = "0.18";

        }, 700);
    }

}, 4000);