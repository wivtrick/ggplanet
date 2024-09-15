function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function closeAlertBar() {
    var alertBar = document.getElementById("alertBar");
    alertBar.style.display = "none";
}