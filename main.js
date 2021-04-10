const toggleBtn = document.getElementsByClassName("toggle")[0];
const navbar = document.getElementsByClassName("nav-links")[0];
const navcolor = document.getElementsByClassName("nav-bar")[0];

toggleBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    navbar.classList.toggle('active');
});