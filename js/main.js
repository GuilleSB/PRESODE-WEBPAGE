
let ubicacionPrincipal = window.pageYOffset;

AOS.init();
window.addEventListener("scroll", function(){
    let despActual = window.pageYOffset;
    if(ubicacionPrincipal>= despActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = despActual;
});

// Menu

let linkHeaders = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        document.getElementsByTagName("body")[0].classList.add("disable-scroll");
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
        semaforo = true;
    }
    linkHeaders.classList.toggle("menudos");
});