const nav = document.querySelector(".nav");
const topnav = nav.offsetTop;
function fixnav(){
    if(window.scrollY >= topnav){
        document.body.style.paddingTop = nav.offsetHeight + "px"
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener("scroll", fixnav)