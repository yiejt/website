const red_dot = document.querySelector(".collapsed-red-dot");
const triangle = document.querySelector(".triangle");
const red_dot_content = document.querySelector(".red-dot-content");

document.addEventListener("click", function(){
    triangle.classList.remove("show");
    red_dot_content.classList.remove("show");
});


red_dot.addEventListener("click", function(e){
    e.stopPropagation(); 
    triangle.classList.toggle("show");
    red_dot_content.classList.toggle("show");
});

red_dot_content.addEventListener("click", function(e){
    e.stopPropagation(); 
});
triangle.addEventListener("click", function(e){
    e.stopPropagation(); 
});
//

const burger = document.querySelector(".burger");
const burger_content = document.querySelector(".burger-nav")

burger.addEventListener("click", () => {
    burger.textContent =
        burger.textContent === "menu" ? "close" : "menu";
        
    if (burger_content.classList.contains('show')) {
        burger_content.classList.remove('show');
    } else {
        burger_content.classList.add('show');
    }
});
//

const header = document.querySelector("header");

function updateHeaderHeight() {
    const height = header.getBoundingClientRect().height;

    document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
    );

    console.log(height);
}

updateHeaderHeight();

window.addEventListener("resize", updateHeaderHeight);
//

const homepageImg =
document.querySelector(".homepage-img");

window.addEventListener("scroll",()=>{

    const scroll =
    window.scrollY;

    homepageImg.style.transform =
    `translateY(${scroll * 0.5}px)`;

});
//

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});
//

document.getElementById("year").textContent = new Date().getFullYear();