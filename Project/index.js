const container2 = document.querySelector(".container2");
const exploreBtn = document.querySelector("#explore");
const body = document.querySelector("body");
const home = document.querySelector(".container");

exploreBtn.onclick = () => {
    container2.classList.add("active");
    body.style.overflow = "hidden";
    home.style.opacity = "0.09";
}
