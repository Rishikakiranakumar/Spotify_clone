const menuToggle=document.querySelector(".menu-toggle");
const mobileMenu=document.querySelector(".mobile-menu");
menuToggle.addEventListener("click",()=>{
    alert("Button clicked");
    mobileMenu.classList.toggle("active");
})