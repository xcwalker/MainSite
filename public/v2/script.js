const header = document.querySelector("header");
const topSection = document.querySelector("section.fullscreen");
document.addEventListener("scroll", e => {
    if (topSection.getBoundingClientRect().top < 0) {
        header.classList.add("scrolled")
    } else if (topSection.getBoundingClientRect().top >= 0) {
        header.classList.remove("scrolled")
    }
})

const body = document.body;
const nav = document.querySelector("nav")
function showNav() {
    if (nav.classList.contains("visible")) {
        nav.classList.remove("visible")
        body.classList.remove("noscroll")
    } else if (!nav.classList.contains("visible")) {
        nav.classList.add("visible")
        body.classList.add("noscroll")
    }
}