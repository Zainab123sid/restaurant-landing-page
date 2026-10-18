const toggleMenu=document.getElementById("toggleMenu");
const siteNav=document.getElementById("siteNav");
toggleMenu.onclick=function(){
  siteNav.classList.toggle("active");
  toggleMenu.classList.toggle("active");
  
}