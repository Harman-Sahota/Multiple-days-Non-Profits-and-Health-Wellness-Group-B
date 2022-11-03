const x = document.getElementById("navigation");

function myFunction() {
    if (x.className === "navbar-collapse") {
        x.className += " responsive";
    } else {
        x.className = "navbar-collapse";
    }
}