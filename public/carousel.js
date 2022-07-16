let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["slides1", "slides2"]
showSlides(1, 0, "true");
// showSlides(1, 1);

function plusSlides(n, no, loop) {
    showSlides(slideIndex[no] += n, no, loop);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

var l = 0;

async function showSlides(n, no, loop) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "flex";

    await delay(500)
    if (loop == "true") {
        if (l <= 100) {
            l = l + 1;
            await delay(5000)
            plusSlides(1, no, "true")
        }
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}