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