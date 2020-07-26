// if (LowerCase)
const input = document.querySelector("input");
const passwords = ['Zero', 'jedEN', 'DwA', 'QwertY'];
const messages = ["fajnie", "super", "działa!", "root"]

const showMessage = (e) => {
 passwords.forEach((item, i) => {
  if (item.toLowerCase() === e.target.value.toLowerCase()) {
   document.querySelector('div').textContent = messages[i];
  }
 })
}

input.addEventListener("input", showMessage)


//Metoda map
const input = document.querySelector("input");
const passwords = ['Zero', 'jedEN', 'DwA', 'QwertY'];
const messages = ["fajnie", "super", "działa!", "root"]
const div = document.querySelector('div')

const LCPasswords = passwords.map(password => password.toLowerCase())

const showMessage = (e) => {
 const textInput = e.target.value.toLowerCase();

 for (let i = 0; i < LCPasswords.length; i++) {
  if (textInput === LCPasswords[i]) {
   div.innerHTML = messages[i];
  }
 }
}

input.addEventListener("input", showMessage)