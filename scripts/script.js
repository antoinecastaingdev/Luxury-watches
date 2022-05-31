const menuBg = document.getElementById('burger-container');
const navigation = document.getElementById('navigation-container');
const burgerDivs = document.getElementsByClassName('burger');
const headerLogo = document.getElementById('header-logo');
const burgerDiv1 = document.getElementById('burger1');
const burgerDiv2 = document.getElementById('burger2');
const burgerDiv3 = document.getElementById('burger3');


menuBg.addEventListener('click', () => {
    if (navigation.style.visibility === "visible") {
        navigation.style.visibility = "hidden";
        burgerDiv2.style.opacity = "1";
        burgerDiv1.style.transform = "rotate(0deg)";
        burgerDiv1.style.top = "0px";
        burgerDiv3.style.transform = "rotate(0deg)";
        burgerDiv3.style.bottom = "0px";
        headerLogo.style.visibility = "visible";
        headerLogo.style.filter = "invert(100%)";
        for (let i = 0; i < burgerDivs.length; i++) {
            burgerDivs[i].style.background = "white";
        }
    } else {
        headerLogo.style.filter = "invert(0%)";
        navigation.style.visibility = "visible";
        burgerDiv2.style.opacity = "0";
        burgerDiv1.style.transform = "rotate(45deg)";
        burgerDiv1.style.top = "12px";
        burgerDiv3.style.transform = "rotate(-45deg)";
        burgerDiv3.style.bottom = "12px";
        headerLogo.style.visibility = "hidden";
        for (let i = 0; i < burgerDivs.length; i++) {
            burgerDivs[i].style.background = "black";
        }
    }
});
