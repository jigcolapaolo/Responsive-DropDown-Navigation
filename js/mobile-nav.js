let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

let isMenuOpen = false;                       /*El menu no esta abierto*/

headerMobileBtn.onclick = function(){
    if(!isMenuOpen){                           /*o isMenuOpen == false */
        headerMain.style.display = "flex";
        isMenuOpen = true;
    }
    else if(isMenuOpen){
        headerMain.style.display = "none";
        isMenuOpen = false;
    }
}