async function loadFile(n,t=".main",i={}){try{const r=await(await fetch(n)).text();if(document.querySelector(t).innerHTML+=r,n=="html/landing.html"){const r=new Swiper(".community__swiper",{slidesPerView:1,spaceBetween:15,centeredSlides:!0,loop:!0,pagination:{el:".community__swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".community__swiper-button-next",prevEl:".community__swiper-button-prev"},breakpoints:{768:{slidesPerView:3,spaceBetween:30}}}),n=document.querySelectorAll(".questions__point"),t=document.querySelectorAll(".questions__point-btn");if(t.forEach((t,i)=>{t.addEventListener("click",()=>{n[i].classList.toggle("questions__point_show")})}),i.page=="money"){const n=document.querySelector(".start__title");n.classList.add("start__title_money");const t=document.querySelector(".difference__container");t.classList.add("difference__container_bg-3");const i=document.querySelector(".need__img");i.setAttribute("src","./images/need-2.jpg")}}else if(n=="html/comments.html"){const n=new Swiper(".comments__swiper",{spaceBetween:20,navigation:{nextEl:".comments__swiper-button-next",prevEl:".comments__swiper-button-prev"}});}else n=="pages/drive.html"?loadFile("html/landing.html",".landing"):n=="pages/money.html"&&loadFile("html/landing.html",".landing",{page:"money"});if((n=="pages/home.html"||n=="pages/partner.html"||n=="pages/about.html")&&loadFile("html/comments.html",".comments"),n!="pages/contact.html"){const n=document.querySelector(".header");n.classList.add("main-header")}else if(n=="pages/contact.html"){console.log(n);console.log("1");const t=document.querySelector(".header");t.classList.remove("main-header")}}catch(r){console.log(r)}}loadFile("pages/home.html");const menu=document.querySelector(".header__links"),menuBtn=document.querySelector(".header__btn");menuBtn.addEventListener("click",()=>{menu.classList.toggle("header__links_show")});const links=document.querySelectorAll(".logo, .menu__link > a");links.forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const i=n.getAttribute("href");i!="#"&&(document.querySelector(".main").innerHTML="",loadFile(i));menu.classList.remove("header__links_show")})});