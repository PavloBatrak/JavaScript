const btn = document.querySelector("button");
const itemsLi = document.querySelectorAll("li");
//const itemsLi = [...document.getElementsByTagName("li")]; - pobieramy za pomocy parametra rest
//.getElementsByTagName("li") - html collection (zamieniamy na tablice)
let fontSize = 10;
/*
//FOR
btn.addEventListener("click", () => {
    //console.log("dziala");
    fontSize++;
    for (let i = 0; i < itemsLi.length; i++) {
        itemsLi[i].style.display = "block";
        itemsLi[i].style.fontSize = `${fontSize}px`;
        //fontSize++;
        
    }
})
*/

//FOREACH
btn.addEventListener("click", () => {
    //console.log("dziala");
    
    itemsLi.forEach(elements => {
        elements.style.display = "block";
        elements.style.fontSize = fontSize + "px";
    });
    fontSize++;
})