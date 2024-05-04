
let start = new Date().getTime();

function makeShapeApperiance () {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    let position = Math.random() * 400;

    let size = Math.random() * 400 + 100;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";

    }  else {
        document.getElementById("shape").style.borderRadius = "0%";
    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = size + "px";
    document.getElementById("shape").style.height = size + "px";

    document.getElementById("shape").style.top = position + "px";
    document.getElementById("shape").style.left = position + "px";

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

// setTimeout(makeShapeApperiance);

function appearAfterDelay() {
    setTimeout(makeShapeApperiance,2000);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {

    let end = new Date().getTime();

    let timeTaken = (end - start) / 1000;

    document.getElementById("shape").style.display = "none";

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();

    // setTimeout(makeShapeApperiance , 500);
}