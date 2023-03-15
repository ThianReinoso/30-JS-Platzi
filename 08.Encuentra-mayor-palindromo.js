/* 
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
*/

export function findLargestPalindrome(words) {
const palindromes = words.filter(word => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
});

if (palindromes.length === 0) {
    return null;
}

const largestPalindrome = palindromes.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
});

return largestPalindrome;
}