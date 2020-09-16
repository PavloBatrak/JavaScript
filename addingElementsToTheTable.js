const names = [];
const div = document.querySelector('div');

const addName = (event) => {
    //console.log(event.target.value);
    event.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value; // pobieram wartosc z inputa 
    if (input.value.length) {       //sprawdzam zeby dlugosc byla wieksza niz 0
        for ( name of names){       // czy ta wartosc - name, jest w mojej tablice - names
            if (name === newName){
                alert("to juz jest!");
                return;
            }
        }
        names.push(newName);
        //console.log(names);
        div.textContent += newName + ', ';
        input.value = ""; // żeby czyściło, po dodaniu elementu
    }

}

document.querySelector('button').addEventListener('click', addName)