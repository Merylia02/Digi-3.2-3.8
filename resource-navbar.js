window.onscroll = function() {stickToTop()};

var header = document.getElementById("hDiv");
var distance = header.offsetTop;
var offsetLinks = document.getElementById("nRes")

function stickToTop () {
    if (window.pageYOffset > distance) {
        header.style.position = "fixed";
        header.style.margin = "0px";
        header.style.padding = "0px";
        header.style.width = "98.75vw";
        header.style.borderRadius = "0px";
        offsetLinks.style.right = "28px";
    }
    else {
        header.style.position = "initial";
        header.style.margin = "60px 250px 0px";
        header.style.padding = "5px 20px";
        header.style.width = "72vw";
        header.style.borderRadius = "30px 30px 20px 20px";
        offsetLinks.style.right = "250px";
    }
}

