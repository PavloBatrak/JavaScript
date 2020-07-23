let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Stwórz listę na 10 elementów";
    btnReset.textContent = "Wyczyść";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    btn.style.fontSize = "28px";
    btn.style.fontSize = "28px";
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);
    btn.addEventListener('click', createListElements);
    btnReset.addEventListener('click', cleanList);

}

const createListElements = () => {
    //console.log("klik");
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
        
    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()