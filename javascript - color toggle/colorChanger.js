var click = document.querySelector("button");
var body = document.querySelector("body");

click.addEventListener ("click", function() {
    if(body.style.background === "white") {
        body.style.background = "purple";
    }

    else {
        body.style.background = "white";
    }

});
