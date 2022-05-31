class ProductCard {
    picture;
    name;
    price;
    material;
    isMan;
    color;

    constructor(picture, name, price, material, isMan, color) {
        this.picture = picture;
        this.name = name;
        this.price = price;
        this.material = material;
        this.isMan = isMan;
        this.color = color;
    }
}


// Toutes les montres

const watch1 = new ProductCard("../assets/pictures-videos/products-section/watch1.png", "SBGJ255", "8500", ["", "silver", "", "", "", ""], true, ["white"]);
const watch2 = new ProductCard("../assets/pictures-videos/products-section/watch2.png", "SBGW260", "29800", ["", "", "pink gold", "nacre", "leather", ""], false, ["pink", "brown"]);
const watch3 = new ProductCard("../assets/pictures-videos/products-section/watch3.png", "SBGK013", "17000", ["", "", "pink gold", "", "leather", ""], false, ["pink", "brown"]);
const watch4 = new ProductCard("../assets/pictures-videos/products-section/watch4.png", "SLGH009", "54200", ["", "silver", "", "", "", ""], true, ["white", "blue"]);
const watch5 = new ProductCard("../assets/pictures-videos/products-section/watch5.png", "SBGW262", "1200", ["gold", "", "", "", "leather", ""], false, ["black", "yellow"]);
const watch6 = new ProductCard("../assets/pictures-videos/products-section/watch6.png", "SLGH002", "15400", ["gold", "", "", "", "leather", ""], false, ["brown", "yellow"]);
const watch7 = new ProductCard("../assets/pictures-videos/products-section/watch7.png", "SBGK006", "2800", ["gold", "", "", "nacre", "", ""], false, ["brown", "yellow"]);
const watch8 = new ProductCard("../assets/pictures-videos/products-section/watch8.png", "SBGK011", "4300", ["", "silver", "", "", "leather", ""], false, ["white", "black"]);
const watch9 = new ProductCard("../assets/pictures-videos/products-section/watch9.png", "SBGM247", "6000", ["", "silver", "", "", "", ""], true, ["green", "white"]);
const watch10 = new ProductCard("../assets/pictures-videos/products-section/watch10.png", "SLGH007", "1200000", ["", "silver", "", "", "leather", ""], true, ["black", "white"]);
const watch11 = new ProductCard("../assets/pictures-videos/products-section/watch11.png", "SBGP005", "8700", ["", "silver", "", "", "", ""], true, ["white", "blue"]);
const watch12 = new ProductCard("../assets/pictures-videos/products-section/watch12.png", "SBGM245", "2100", ["", "silver", "", "", "", ""], true, ["white", "blue"]);
const watch13 = new ProductCard("../assets/pictures-videos/products-section/watch13.png", "SBGW289", "9900", ["", "silver", "pink gold", "", "", ""], false, ["pink", "white"]);
const watch14 = new ProductCard("../assets/pictures-videos/products-section/watch14.png", "SBGP001", "12100", ["", "silver", "", "", "", ""], true, ["yellow", "white"]);
const watch15 = new ProductCard("../assets/pictures-videos/products-section/watch15.png", "SBGH263", "14000", ["gold", "silver", "", "", "leather", ""], true, ["white", "brown"]);
const watch16 = new ProductCard("../assets/pictures-videos/products-section/watch16.png", "SBGP013", "21300", ["", "silver", "", "", "", ""], true, ["white", "blue"]);
const watch17 = new ProductCard("../assets/pictures-videos/products-section/watch17.png", "SBGJ237", "27000", ["", "silver", "", "", "", ""], true, ["white", "blue"]);
const watch18 = new ProductCard("../assets/pictures-videos/products-section/watch18.png", "SBGX263", "44900", ["", "silver", "", "", "", ""], false, ["white", "yellow"]);
const watch19 = new ProductCard("../assets/pictures-videos/products-section/watch19.png", "SBGH289", "51600", ["", "silver", "", "", "", ""], true, ["white", "black", "blue"]);
const watch20 = new ProductCard("../assets/pictures-videos/products-section/watch20.png", "SBGJ239", "71400", ["", "silver", "", "", "leather", ""], true, ["green", "white", "brown"]);

const productCardList = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8, watch9, watch10, watch11, watch12, watch13, watch14, watch15, watch16, watch17, watch18, watch19, watch20];


// Affichage de toutes les montres dans la section produits
const shoppingIcon = document.getElementById('header-cart-icon');
const shoppingDiv = document.getElementById('shopping-div');
const productsContainer = document.getElementById('products-container');

for (let i = 0; i < productCardList.length; i++) {
    productsContainer.innerHTML += `
    <div class="product-card" id="card${i}">
        <img src="${productCardList[i].picture}" alt="Photo d'une montre" class="card-picture">
        <h3 class="product-card-title">${productCardList[i].name}</h3>
        <p class="card-price">${productCardList[i].price}€</p>
        <button class="product-card-button" id="button${i}">Acheter</button>
    </div>
    `;
}

for (let i = 0; i < productCardList.length; i++) {
    const button = document.getElementById(`button${i}`);
    button.addEventListener('click', () => {
        console.log("hello");
        shoppingDiv.innerHTML += `
        <div class="bought-card">
            <img src="${productCardList[i].picture}" alt="Photo d'une montre" class="bought-card-picture">
            <div class="bought-card-title-price">
                <h3 class="bought-card-title">${productCardList[i].name}</h3>
                <p class="bought-card-price">${productCardList[i].price}€</p>
            </div>
        </div>
        `;
    })
}


// Tableaux de chaque filtre

const materialList = ["", "", "", "", "", ""];
const colorList = ["", "", "", "", "", "", "", "", ""];
const genderList = ["", ""];
const priceList = ["", ""];
const filterList = [[], [], [], []];


// Filtre matériaux

const material1 = document.getElementById('material1');

material1.addEventListener('click', () => {
    if (materialList[0] === "gold") {
        materialList[0] = "";
        material1.style.background = "white";
        material1.style.color = "black";
    } else {
        materialList[0] = "gold";
        material1.style.background = "#0175ff";
        material1.style.color = "white";
    }
});

const material2 = document.getElementById('material2');

material2.addEventListener('click', () => {
    if (materialList[1] === "silver") {
        materialList[1] = "";
        material2.style.background = "white";
        material2.style.color = "black";
    } else {
        materialList[1] = "silver";
        material2.style.background = "#0175ff";
        material2.style.color = "white";
    }
});

const material3 = document.getElementById('material3');

material3.addEventListener('click', () => {
    if (materialList[2] === "pink gold") {
        materialList[2] = "";
        material3.style.background = "white";
        material3.style.color = "black";
    } else {
        materialList[2] = "pink gold";
        material3.style.background = "#0175ff";
        material3.style.color = "white";
    }
});

const material4 = document.getElementById('material4');

material4.addEventListener('click', () => {
    if (materialList[3] === "nacre") {
        materialList[3] = "";
        material4.style.background = "white";
        material4.style.color = "black";
    } else {
        materialList[3] = "nacre";
        material4.style.background = "#0175ff";
        material4.style.color = "white";
    }
});

const material5 = document.getElementById('material5');

material5.addEventListener('click', () => {
    if (materialList[4] === "leather") {
        materialList[4] = "";
        material5.style.background = "white";
        material5.style.color = "black";
    } else {
        materialList[4] = "leather";
        material5.style.background = "#0175ff";
        material5.style.color = "white";
    }
});

const material6 = document.getElementById('material6');

material6.addEventListener('click', () => {
    if (materialList[5] === "diamond") {
        materialList[5] = "";
        material6.style.background = "white";
        material6.style.color = "black";
    } else {
        materialList[5] = "diamond";
        material6.style.background = "#0175ff";
        material6.style.color = "white";
    }
});

const checkboxMaterial = document.getElementById('checkbox2');

checkboxMaterial.addEventListener('click', () => {
    filterList[0] = materialList;
});


// Filtre couleurs

const color1 = document.getElementById('color1');

color1.addEventListener('click', () => {
    if (colorList[0] === "black") {
        colorList[0] = "";
        color1.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[0] = "black";
        color1.style.border = "1px solid #0175ff";
    }
});

const color2 = document.getElementById('color2');

color2.addEventListener('click', () => {
    if (colorList[1] === "white") {
        colorList[1] = "";
        color2.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[1] = "white";
        color2.style.border = "1px solid #0175ff";
    }
});

const color3 = document.getElementById('color3');

color3.addEventListener('click', () => {
    if (colorList[2] === "red") {
        colorList[2] = "";
        color3.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[2] = "red";
        color3.style.border = "1px solid #0175ff";
    }
});

const color4 = document.getElementById('color4');

color4.addEventListener('click', () => {
    if (colorList[3] === "orange") {
        colorList[3] = "";
        color4.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[3] = "orange";
        color4.style.border = "1px solid #0175ff";
    }
});

const color5 = document.getElementById('color5');

color5.addEventListener('click', () => {
    if (colorList[4] === "yellow") {
        colorList[4] = "";
        color5.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[4] = "yellow";
        color5.style.border = "1px solid #0175ff";
    }
});

const color6 = document.getElementById('color6');

color6.addEventListener('click', () => {
    if (colorList[5] === "green") {
        colorList[5] = "";
        color6.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[5] = "green";
        color6.style.border = "1px solid #0175ff";
    }
});

const color7 = document.getElementById('color7');

color7.addEventListener('click', () => {
    if (colorList[6] === "brown") {
        colorList[6] = "";
        color7.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[6] = "brown";
        color7.style.border = "1px solid #0175ff";
    }
});

const color8 = document.getElementById('color8');

color8.addEventListener('click', () => {
    if (colorList[7] === "blue") {
        colorList[7] = "";
        color8.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[7] = "blue";
        color8.style.border = "1px solid #0175ff";
    }
});

const color9 = document.getElementById('color9');

color9.addEventListener('click', () => {
    if (colorList[8] === "pink") {
        colorList[8] = "";
        color9.style.border = "1px solid rgb(205, 205, 205)";
    } else {
        colorList[8] = "pink";
        color9.style.border = "1px solid #0175ff";
    }
});

const checkboxColor = document.getElementById('checkbox3');

checkboxColor.addEventListener('click', () => {
    filterList[1] = colorList;
});


// Filtre genre

const gender1 = document.getElementById('gender1');

gender1.addEventListener('click', () => {
    if (genderList[0] === "man") {
        genderList[0] = "";
        gender1.style.background = "white";
        gender1.style.color = "black";
    } else {
        genderList[0] = "man";
        gender1.style.background = "#0175ff";
        gender1.style.color = "white";
    }
});

const gender2 = document.getElementById('gender2');

gender2.addEventListener('click', () => {
    if (genderList[1] === "woman") {
        genderList[1] = "";
        gender2.style.background = "white";
        gender2.style.color = "black";
    } else {
        genderList[1] = "woman";
        gender2.style.background = "#0175ff";
        gender2.style.color = "white";
    }
});

const checkboxGender = document.getElementById('checkbox4');

checkboxGender.addEventListener('click', () => {
    filterList[2] = genderList;
});



// Filtre prix

const price1 = document.getElementById('price1');

price1.addEventListener('input', () => {
    priceList[0] = price1.value;
});

const price2 = document.getElementById('price2');

price2.addEventListener('input', () => {
    priceList[1] = price2.value;
});

const checkboxPrice = document.getElementById('checkbox5');

checkboxPrice.addEventListener('click', () => {
    filterList[3] = priceList;
});

// Activer filtre

const filterButton = document.getElementById('filter-toggle');

filterButton.addEventListener('click', () => {
    // for (let i = 0; i < productCardList.length; i++) {
    //     for (let j = 0; j < materialList.length; j++) {
    //         let isMaterial = false;
    //         if (productCardList[i].material.includes(materialList[j])) {
    //             if (materialList[j] !== "") {
    //                 isMaterial = true;
    //             }
    //         }
    //     }
    //     // if (productCardList[i].color !== colorList) {
    //     //     product = false;
    //     // }

    //     // if (productCardList[i].material !== materialList) {
    //     //     product = false;
    //     // }

    //     // if (productCardList[i].material !== materialList) {
    //     //     product = false;
    //     // }

    //     // if (productCardList[i].material !== materialList) {
    //     //     product = false;
    //     // }

    //     if (isMaterial && )
    // }
    if (material1.style.background === "rgb(1, 117, 255)") {
        productsContainer.innerHTML = ``;
        let productsCardList2 = [watch5, watch6, watch7, watch15];
        for (let i = 0; i < productsCardList2.length; i++) {
            productsContainer.innerHTML += `
            <div class="product-card" id="card${i}">
            <img src="${productsCardList2[i].picture}" alt="Photo d'une montre" class="card-picture">
            <h3 class="product-card-title">${productsCardList2[i].name}</h3>
            <p class="card-price">${productsCardList2[i].price}€</p>
            <button class="product-card-button" id="button${i}">Acheter</button>
        </div>
        `;
        }
    } else {
        productsContainer.innerHTML = ``;
        let productsCardList2 = [watch1, watch2, watch3, watch4, watch5, watch6, watch7, watch8, watch9, watch10, watch11, watch12, watch13, watch14, watch15, watch16, watch17, watch18, watch19, watch20];
        for (let i = 0; i < productsCardList2.length; i++) {
            productsContainer.innerHTML += `
            <div class="product-card" id="card${i}">
            <img src="${productsCardList2[i].picture}" alt="Photo d'une montre" class="card-picture">
            <h3 class="product-card-title">${productsCardList2[i].name}</h3>
            <p class="card-price">${productsCardList2[i].price}€</p>
            <button class="product-card-button" id="button${i}">Acheter</button>
        </div>
        `;
        }
    }
})









const checkbox1 = document.getElementById('checkbox1');



// Shopping


shoppingIcon.addEventListener('click', () => {
    if (shoppingDiv.style.visibility === "visible") {
        shoppingDiv.style.visibility = "hidden";
    } else {
        shoppingDiv.style.visibility = "visible";
    }
})
