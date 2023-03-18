/*
En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando promesas.

Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.

Ejemplo:

Input:
runCode()
.then(response => console.log(response));

Output:
["Task 1", "Task 2", "Task 3"]

*/



//tasks.js
export function doTask1() {
    return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 1'), 300);
})
}

export function doTask2() {
return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 2'), 300);
})
}

export function doTask3() {
return new Promise((resolve) => {
    window.setTimeout(() => resolve('Task 3'), 300);
})
}


//exercise.js
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
const strings = [];

return doTask1()
.then(function (rta1) {
    //Agrego la respuesta1 a strings y llamo a doTask2
    strings.push(rta1);
    return doTask2();
})
.then(function (rta2) {
    //Agrego la respuesta2 a strings y llamo a doTask3
    strings.push(rta2);
    return doTask3();
})
.then(function (rta3) {
    //Agrego la respuesta3 a strings y retorno strings
    strings.push(rta3);
    return strings;
})
}
