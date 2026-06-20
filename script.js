let points = 0;

function addPoint() {
    points += 10;
    document.getElementById("points").innerText = points;
}

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
} 