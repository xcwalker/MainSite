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
function showNav(vis) {
    if (nav.classList.contains("visible")) {
        nav.classList.remove("visible")
        body.classList.remove("noscroll")
    } else if (!nav.classList.contains("visible")) {
        nav.classList.add("visible")
        body.classList.add("noscroll")
    }

    if (vis == false) {
        nav.classList.remove("visible")
        body.classList.remove("noscroll")
    }

    if (vis != false) {
        showMenu(false)
    }
}

const menu = document.querySelector("#menu")
function showMenu(vis) {
    if (menu.classList.contains("visible")) {
        menu.classList.remove("visible")
        body.classList.remove("noscroll")
        header.classList.remove("scrolled")
    } else if (!menu.classList.contains("visible")) {
        menu.classList.add("visible")
        body.classList.add("noscroll")
        header.classList.add("scrolled")
    }

    if (vis == false) {
        menu.classList.remove("visible")
        body.classList.remove("noscroll")
        header.classList.remove("scrolled")
    }    

    if (vis != false) {
        showNav(false)
    }
}