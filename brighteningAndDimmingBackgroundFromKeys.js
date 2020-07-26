let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode, e.which);
    // 38 - strzałka do góry
    // 40 - strzałka w dół

    //instrukcja if
    if(e.keyCode === 38 && red < 255){
        red += 1;
        green += 1;
        blue += 1;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (e.keyCode === 40 && red >= 0){
        red--;
        green--;
        blue--;    
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    //instrukcja switch
    /*
    switch (e.keyCode){
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, 
                ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue })`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red >= 0 ? --red : red}, 
                ${green >= 0 ? --green : green}, ${blue >= 0 ? --blue : blue})`;
            break;
    }
    */
}

window.addEventListener('keydown', changeColor)