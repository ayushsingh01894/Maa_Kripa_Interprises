// ===============================
// WhatsApp Order
// ===============================

function orderNow() {
    window.open("https://wa.me/917587347580", "_blank");
}


// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".fade").forEach((el)=>{
observer.observe(el);
});


// ===============================
// Hero Auto Slider
// ===============================

const heroImages=[

"banner1.jpeg"

];

let current=0;

const hero=document.querySelector(".hero-slide img");

if(hero){

setInterval(()=>{

current++;

if(current>=heroImages.length){

current=0;

}

hero.style.opacity="0";

setTimeout(()=>{

hero.src=heroImages[current];

hero.style.opacity="1";

},400);

},4000);

}


// ===============================
// Active Navbar
// ===============================

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(scrollY>=top){

currentSection=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+currentSection){

link.classList.add("active");

}

});

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}


// ===============================
// Card Hover Animation
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// Lazy Image Loading
// ===============================

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("loading","lazy");

});


// ===============================
// Current Year Footer
// ===============================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

