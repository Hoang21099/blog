function myFunction() {
    var x = document.getElementById("mynav");
    var y = document.getElementsByClassName("nav-link");
    if (x.className === "nav") {
        x.className += " responsive";
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
    } else {
        x.className = "nav";
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
    }
}

var width = $(window).width();
console.log(width);
if (width <= 1024) {
    $('.nav-post').css("flex-direction", "row");
}