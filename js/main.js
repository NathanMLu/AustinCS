console.log('Hello World!');

const myButton = document.getElementById('change');
const text = document.getElementById('hello');

function updateText () {
  text.innerHTML = "Bye World!";
}

myButton.addEventListener('click', updateText);