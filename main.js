let navOpened = false;
function toggleNav() {
    if (navOpened) {
        document.getElementById("listSidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        document.getElementById("openbtn").classList.remove('open');
        navOpened = false;
    } else {
        document.getElementById("listSidebar").style.width = "350px";
        document.getElementById("main").style.marginRight = "350px";
        document.getElementById("openbtn").classList.add('open');
        navOpened = true;
    }
}
