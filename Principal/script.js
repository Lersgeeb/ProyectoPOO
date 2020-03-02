function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = `url(${images[x]})`;
    console.log("change")
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "../img/Principal/image1.jpg";
images[1] = "../img/Principal/image2.jpg";
images[2] = "../img/Principal/image3.jpg";

