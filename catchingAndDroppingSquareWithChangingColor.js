const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + "px";
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
 //console.log("wcisnięty");
 div.style.backgroundColor = "gray";
 drawActive = !drawActive;
 // drawActive = true;

 insertDivX = e.offsetX;
 insertDivY = e.offsetY;
 console.log(insertDivX, insertDivY);

})

div.addEventListener('mousemove', (e) => {
 //console.log("ruszamy myszką");
 if (drawActive) {


  divX = e.clientX - insertDivX;
  divY = e.clientY - insertDivY;
  div.style.left = `${divX}px`;
  div.style.top = `${divY}px`;
 }
})

div.addEventListener('mouseup', () => {
 //console.log("puściłem");
 div.style.backgroundColor = "black";
 drawActive = !drawActive;
 // drawActive = false;
})