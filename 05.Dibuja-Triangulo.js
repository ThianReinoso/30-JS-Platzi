/*
En este desafío, debes dibujar un triángulo isósceles usando bucles.

Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****

Ejemplo 2:

Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$
*/
export function printTriangle(size, character) {
    const triangle = [];
  
    for (let i = 1; i <= size; i++) {
      let spaces = " ".repeat(size - i);
      // Después repetimos el carácter a pintar la cantidad de veces del iterador
      let characters = character.repeat(i);
      // Para después juntar el número de espacios y caracteres en un solo string
      let figure = `${spaces}${characters}`;
      // Y al final mandar esto al array inicial
      triangle.push(figure);
    }
    return triangle.join("\n");
  }