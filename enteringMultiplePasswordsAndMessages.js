const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "zima", "Bender"];
const messages = ["nie jest adminem", "piękna pora roku", "Futurama"];

input.addEventListener('input', (e) => {
    div.textContent = ''; // za każdym razem, jak wykonujemy zdarzenie, to my czyszczymy sobie div.textContent
    
    const text = e.target.value;
    //console.log(text);
    
    passwords.forEach((password, index) => {
        if (password === text) {
            //console.log(pasword, index);
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})