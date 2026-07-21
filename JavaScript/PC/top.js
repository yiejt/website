document.querySelector(".contact").addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById("bottom").scrollIntoView({
        behavior: "smooth"
    });
});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

    reveals.forEach(function(element){

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

});

const red_dot = document.querySelector(".collapsed-red-dot");
const red_dot_content = document.querySelector(".red-dot-content");

red_dot.addEventListener("click", function(e){
    e.stopPropagation(); // 防止点击按钮时触发 document
    red_dot_content.classList.toggle("show");
});


document.addEventListener("click", function(){
    red_dot_content.classList.remove("show");
});


red_dot_content.addEventListener("click", function(e){
    e.stopPropagation(); // 点击菜单里面不会关闭
});