//Ejercicio 1: Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

const capitalize = function (palabra) {
  return palabra.toUpperCase().split("").join(" ");
};

console.log(capitalize ("Ana"));

//Ejercicio 2: Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.


const esaldi = function conteo(letra) {
  return letra.split(" ").length;

};
console.log(esaldi("Hoy es miércoles y vamos al parque"))

//Ejercicio 3: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

const frase = function conteo(letra) {
  return letra.split("").filter(letter => letter === "e").length;

};

console.log(frase("Mi nombre es Pepe"))


