// Desafíos:
// 01 - Crear una función que muestre "¡Hola, mundo!" en la consola.

function printHello(){
    console.log("Hola, mundo!");
};

printHello();

// 02 - Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function greetUser(name){
    console.log(`Hola, ${name}!`);
};

greetUser("Silvana");


// 03 - Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function double(number){
    let result = 2 * number;
    return(result);
};

let total = double(3);
console.log(total);

// 04 - Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcAverage(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
};

let averageNum = calcAverage (2,5,9);
console.log(averageNum);

// 05 - Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function getMax ( number1, number2) {

    let max = 0;

    if (number1 > number2){
        max = number1;
    } else {
        max = number2;
    }

    return  max;
};

let max_number = getMax(9, 2);
console.log(max_number);

// 06 - Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function square(number){

    return  number * number;
};

let square_number = square (9);
console.log(square_number);

