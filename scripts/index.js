const mecanismDiv1 = document.getElementById('mecanism-section-left-div1');
const mecanismDiv2 = document.getElementById('mecanism-section-left-div2');
const mecanismDiv3 = document.getElementById('mecanism-section-left-div3');
const mecanismImg = document.getElementById('mecanism-section-picture');


mecanismDiv1.addEventListener('mouseenter', () => {
    mecanismImg.src = "../assets/pictures-videos/mecanism-section/9s-mecanic.png";
});

mecanismDiv2.addEventListener('mouseenter', () => {
    mecanismImg.src = "../assets/pictures-videos/mecanism-section/9r-spring-drive.png";
});

mecanismDiv3.addEventListener('mouseenter', () => {
    mecanismImg.src = "../assets/pictures-videos/mecanism-section/9f-quartz.png";
});
