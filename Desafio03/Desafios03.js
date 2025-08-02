// Desafíos:
// 01 - Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calculeIMC ( weight, height){
    let heightInMeters = height / 100;
    let imc = weight / (heightInMeters * heightInMeters);
    return imc;
}

// Ejemplo de uso
calculeIMC(80, 150);
console.log(calculeIMC(80, 160));

// 02 -Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial (number){

    let result = 1;
    for ( let i= 1; i <= number; i++){
        result *= i;
    }

    return result;
}

// Ejemplo de uso
let number = 6;
let factorialnumber = factorial(number);
console.log(`El factorial del numero ${number} es ${factorialnumber}`);

// 03 - Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en pesos(moneda argentina). 
// Para esto, considera la cotización del dólar igual a A$1400.

function convertDollarToPeso(usdAmount){

    let priceDollar = 1400;
    let priceArs = usdAmount * priceDollar;
    return priceArs;
}

// Ejemplo de uso
let priceShirt = convertDollarToPeso(300);
console.log(priceShirt);

// 04 - Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function getRectangleProperties(base, height) {

    let area = base * height;
    let perimeter = 2 * ( base + height);

    return{area, perimeter}; // Develve un objeto 

}

// Ejemplo de uso
let base = 10;
let height = 30;

let rectProps = getRectangleProperties(base, height);
console.log(`El rectangulo tiene una base = ${base} y una altura de ${height}. Su area es: ${area} y su perimetro = ${perimeter}.`);

// 05 - Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. 
// Considera Pi = 3,14

function getCircleProperties(radio) {
    const PI = 3.14;
    let area = PI * (radio * radio);
    let perimeter = 2 * PI * radio;
    return { area, perimeter };
}

// Ejemplo de uso
let radio = 4;
let circleProps = getCircleProperties(radio);
console.log(`El circulo tiene un radio = ${radio}. Su area es: ${circleProps.area} y su perimetro = ${circleProps.perimeter}.`);

// 06 - Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function printTimesTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
}
}

// Ejemplo de uso
printTimesTable(5);