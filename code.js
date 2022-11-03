console.log("todo conectado")

const primerValor = document.querySelector('#ejemploPrueba');
const barraProgreso = document.querySelector('#barraProgreso');
const btnOK = document.querySelector('#btnOK');

console.log(primerValor.value)

btnOK.addEventListener("click", (e) => {
    e.preventDefault();
    barraProgreso.style.width = ejemploPrueba.value + "%";
  })