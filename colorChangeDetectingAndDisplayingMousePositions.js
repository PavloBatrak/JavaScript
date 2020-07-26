const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(event) {
    //console.log("ruch myszki");
    //console.log(event.clientX, event.clientY);
    //h1.textContent = `${event.clientX}, ${event.clientY}`;
    //h1.textContent = `${event.pageX}, ${event.pageY}`; 
    //page - jak daleko od lewej krawędzi
    //h1.textContent = `${event.screenX}, ${event.screenY}`;
    //screen - od początku ekranu
    //h1.textContent = event.clientX + ", " + event.clientY;
    //client - od początku lewej krawędzi przegłądarki

    //document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 100)`;

    const x = event.clientX + 1;
    const y = event.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = x + ", " + y;


    const red = x / width * 100; //100%
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

})