let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío';

function showInConsole() {
    console.log("El botón fue clicado");
};

function askCityName(){
    cityName = prompt(" Inserte el nombre de una ciudad de Brasil: ");
    alert(`Estuve en ciudad ${cityName} y me acordé de ti`);
};

function alertMessage() {
    alert(" Yo amo JS ");
};

function addNumbers(){
    let num1 = prompt("Ingrese el primero número: ");
    let num2 = prompt("Ingrese otro número: ");
    let sum = num1 + num2
    alert(`${num1} + ${num2} =  ${sum}`);

}
