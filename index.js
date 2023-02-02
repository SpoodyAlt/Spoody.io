setTimeout(() => {
    document.getElementById("description").style.color = "rgb(179, 179, 179)";
    console.log('CONFIRM')
}, 2000);

window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 180) {
        document.getElementById("month").style.opacity = "100%";
        document.getElementById("month").style.bottom = "-34%";
        document.getElementById("quarterly").style.opacity = "100%";
        document.getElementById("quarterly").style.bottom = "-34%";
        document.getElementById("lifetime").style.opacity = "100%";
        document.getElementById("lifetime").style.bottom = "-34%";
    } else {
        document.getElementById("month").style.opacity = "0%";
        document.getElementById("month").style.bottom = "-70%";
        document.getElementById("quarterly").style.opacity = "0%";
        document.getElementById("quarterly").style.bottom = "-70%";
        document.getElementById("lifetime").style.opacity = "0%";
        document.getElementById("lifetime").style.bottom = "-70%";
    }
}