search_icon=document.querySelector('.icons .fa-search');
search_box=document.querySelector('.search-box');

menu_btn=document.querySelector('.icons .fa-bars');
navbar=document.querySelector('.header .navbar');


search_icon.onclick=()=>{
    search_box.classList.toggle('active');
}


menu_btn.onclick=()=>{
    navbar.classList.toggle('active');
}