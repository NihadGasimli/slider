var image = document.querySelector("#image");
var text = document.querySelector("#text");
var imageDiv = document.querySelector("#imageDiv");
var counter = 1;
var stopped = false;
var icaze = false;

window.addEventListener("load", function () {
    image.src = `./assets/images/1.jpg`
    setInterval(next, 4000);
})

function slider() {
    if (!stopped) {
        image.src = `./assets/images/spinner.gif`;
        icaze = true;
    }
}

function next() {
    setTimeout(slider, 1500);
    if (!stopped && icaze) {
        counter++;
        if (counter >= 4) {
            counter = 1;
        }
        image.src = `./assets/images/${counter}.jpg`
        text.innerHTML = `${counter}`;
    }
    else {
        image.src = `./assets/images/${counter}.jpg`
    }
}

imageDiv.addEventListener("mouseenter", function () {
    stopped = true;
    icaze = false;
    text.innerHTML = "Stopped"
    console.log("Mouse entered")
})
imageDiv.addEventListener("mouseleave", function () {
    stopped = false;
    console.log("Mouse leaved")
})