const menuBg = document.getElementById('burger-container');
const navigation = document.getElementById('navigation-container');
const burgerDivs = document.getElementsByClassName('burger');
menuBg.addEventListener('click', () => {
    if (navigation.style.visibility === "visible") {
        navigation.style.visibility = "hidden";
        for (let i = 0; i < burgerDivs.length; i++) {
            burgerDivs[i].style.background = "white";
        }
    } else {
        navigation.style.visibility = "visible";
        for (let i = 0; i < burgerDivs.length; i++) {
            burgerDivs[i].style.background = "black";
        }
    }
    console.log('hey');
});

