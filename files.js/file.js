let button = document.querySelector(".ham");
let mobileNav = document.querySelector(".links");
console.log(button);
console.log(mobileNav);
button.addEventListener("click", (e) => {
mobileNav.classList.toggle("show");
})