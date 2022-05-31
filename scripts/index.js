// section carousel

class HomeWatch {
    img;
    name;
    text;
    
    constructor(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }
}

const airKing = new HomeWatch("../assets/pictures-videos/slider/air-king.jpg", "AIR-KING", "Le ciel est à portée de main");
const dateJust31 = new HomeWatch("../assets/pictures-videos/slider/datejust-31.jpg", "DATEJUST 31", "Un éternel renouveau");
const dayDate40 = new HomeWatch("../assets/pictures-videos/slider/day-date-40.jpg", "DAY-DATE 40", "La voie la plus audacieuse");
const gmtMasterII = new HomeWatch("../assets/pictures-videos/slider/gmt-master-II.jpg", "GMT-MASTER II", "À la poursuite de nouveaux horizons");
const yachtMaster42 = new HomeWatch("../assets/pictures-videos/slider/yacht-master-42.jpg", "YACHT-MASTER 42", "Briller d'un nouvel éclat");

const cardList = [airKing, dateJust31, dayDate40, gmtMasterII, yachtMaster42];

const leftButton = document.getElementById('carousel-left-button');
const rightButton = document.getElementById('carousel-right-button');
const carouselName = document.getElementById('carousel-card-name');
const carouseltext = document.getElementById('carousel-card-text');
const carousel = document.getElementById('carousel');
let count = 0;

for (let i = 0; i < cardList.length; i++) {
    carousel.innerHTML += `
    <div class="carousel-card" id="carousel-card-${i + 1}">
        <img src="${cardList[i].img}" alt="montre" class="carousel-card-picture">
        <h3 class="carousel-card-name" id="carousel-card-name">${cardList[i].name}</h3>
        <p class="carousel-card-text" id="carousel-card-text">${cardList[i].text}</p>
    </div>
    `
}

// section mecanism

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
