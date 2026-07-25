async function loadComponent(id, file){
    const element = document.getElementById(id);

    const response = await fetch(file);
    element.innerHTML = await response.text();

    if(id === "header"){
        initDevelopingBox();
        contactRedirect();
        portraitRedDot();
        portraitNavigationPane();
        updateHeaderHeight();
        contentAppearGradually();
        homepageBackgroundScroll();
        year();
    }
}

loadComponent("header","./Components/header.html");
loadComponent("footer","./Components/footer.html");


//Developing
let developingTimer;

function initDevelopingBox(){

    const developingBox =
        document.querySelector(".developing-box");

    if(!developingBox) return;


    document.querySelectorAll(".developing")
    .forEach(button=>{

        button.addEventListener("click",e=>{

            e.preventDefault();

            developingBox.classList.add("show");

            clearTimeout(developingTimer);

            developingTimer=setTimeout(()=>{
                developingBox.classList.remove("show");
            },3000);

        });

    });
}


//Contact Redirect
function contactRedirect(){
    document.querySelectorAll(".contact, .Contact").forEach(el => 
        el.addEventListener("click", e => {
            e.preventDefault();
            document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
        })
    );
}


//Portrait Red-Dot
function portraitRedDot(){

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
}

//Portrait Navigation Pane
function portraitNavigationPane() {
    const burger = document.querySelector(".burger");
    const burger_content = document.querySelector(".burger-nav")
    const contact = document.querySelector(".Contact")

    burger.addEventListener("click", () => {
        burger.textContent =
            burger.textContent === "menu" ? "close" : "menu";
            
        if (burger_content.classList.contains('show')) {
            burger_content.classList.remove('show');
        } else {
            burger_content.classList.add('show');
        }
    });

    contact.addEventListener("click", () => {
        burger.textContent =
            burger.textContent === "menu" ? "close" : "menu";
            
        if (burger_content.classList.contains('show')) {
            burger_content.classList.remove('show');
        } else {
            burger_content.classList.add('show');
        }
    });
}


//Header Height
function updateHeaderHeight() {

    const header = document.querySelector("header");

    if (!header) return;

    const height = header.getBoundingClientRect().height;

    document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
    );

    console.log(height);
}

window.addEventListener("resize", updateHeaderHeight);


//Homepage background scroll
function homepageBackgroundScroll(){

    const homepageImg =
    document.querySelector(".homepage-img");

    if(!homepageImg) return;


    window.addEventListener("scroll",()=>{

        requestAnimationFrame(()=>{

            homepageImg.style.transform =
            `translateY(${window.scrollY*0.5}px)`;

        });

    });
}

//Content Appear Gradually
function contentAppearGradually() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });
}

    if(entry.isIntersecting){

        entry.target.classList.add("show");

        observer.unobserve(entry.target);
    }

//Year
function year() {
    document.getElementById("year").textContent = new Date().getFullYear();
}