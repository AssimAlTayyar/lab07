document.getElementById("redBtn").addEventListener("click", function() {
    changeTextColor("red");
});

document.getElementById("blueBtn").addEventListener("click", function() {
    changeTextColor("blue");
});

document.getElementById("greenBtn").addEventListener("click", function() {
    changeTextColor("green");
});

function changeTextColor(color) {
    document.getElementById("heading").style.color = color;
}
