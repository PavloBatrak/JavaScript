const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["OMG", "Elizabet", "Andy", "Firefox", "Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

// console.log(names[index]);

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    // const indexPrefix = Math.floor(Math.random() * prefixs.length);
    // div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[indexName]}`
    //div.textContent = `Fajne imię to ${names[index]}`
}

btn.addEventListener('click', nameGenerator)