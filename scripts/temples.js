const navi = document.querySelector(".navigation");
const showmenu = document.querySelector("#menu");

showmenu.addEventListener('click', function() {
    navi.classList.toggle('show');
    showmenu.classList.toggle('show');

})

document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastmodified").textContent = "lastmodified: " + document.lastModified;
