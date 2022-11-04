
const primerValor = document.querySelector('#primerValor');
const segundoValor = document.querySelector('#segundoValor');
const tercerValor = document.querySelector('#tercerValor');
const cuartoValor = document.querySelector('#cuartoValor');

const barraProgresoAzul = document.querySelector('#barraProgresoAzul');
const barraProgresoAmarilla = document.querySelector('#barraProgresoAmarilla');
const barraProgresoVerde = document.querySelector('#barraProgresoVerde');
const barraProgresoRojo = document.querySelector('#barraProgresoRojo');

const btnAzul = document.querySelector('#btnAzul');
const btnAmarillo = document.querySelector('#btnAmarillo');
const btnVerde = document.querySelector('#btnVerde');
const btnRojo = document.querySelector('#btnRojo');


btnAzul.addEventListener("click", (e) => {
    e.preventDefault();
    barraProgresoAzul.style.width = primerValor.value + "%";
  })

btnAmarillo.addEventListener("click", (e) => {
    e.preventDefault();
    barraProgresoAmarilla.style.width = segundoValor.value + "%";
  })

btnVerde.addEventListener("click", (e) => {
    e.preventDefault();
    barraProgresoVerde.style.width = tercerValor.value + "%";
  })

btnRojo.addEventListener("click", (e) => {
    e.preventDefault();
    barraProgresoRojo.style.width = cuartoValor.value + "%";
  })