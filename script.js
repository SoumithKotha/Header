async function loadComponents() {
    document.getElementById("navbar-container").innerHTML = await (await fetch("navbar.html")).text();
    document.getElementById("footer-container").innerHTML = await (await fetch("footer.html")).text();
}
  
document.addEventListener("DOMContentLoaded", loadComponents);
  