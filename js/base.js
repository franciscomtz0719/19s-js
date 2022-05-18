// crear variables
//let, const, var
// palabras reservadas

var koder = 'Jorge' // se puede modificar
let koder2 = 'Noemi' // se puede modificar
const koder3 = 'Ernesto' // no se puede modificar

console.log(koder, koder2, koder3)
koder = 'Luis'
koder2 = 'Lorena'
console.log(koder, koder2, koder3)

const URL= 'http://www.google.com'
const PI = 3.1416

//Scope
//Let variables
//const variables



//concatenar variables
//operador typeof
let valor1 = 4
let valor2 = 5

console.log(valor1 + valor2)

// string + variable

let koderExample = 'jorge'
let nombreConcatenado = 'Hola' + koderExample
console.log(nombreConcatenado)

//TAREA
//template strings
//string literals

// placeholders
//`string ${variable}`
//example
// console.log(`Hola ${koderExample}`)
// esto imprimiria Hola jorge
//se puede agrear mas placeholders no solo se queda con 1

//Pedir valores al usuarios
// formulario, prompt, etc...
//let nameKoder = prompt('Dame tu nombre', 'Francisco')
//console.log(nameKoder)

//if (nameKoder === null){
//    console.log('Nombre vacio')
//} else{
//    console.log('nameKoder')
//}
    

//perdir grados celcius en su localidad
let grados = prompt('Imgresa grados celcius')
let celciusNum = parseInt(grados)
if (celciusNum === null){
    console.log(`La temperatura es ${celciusNum * (9/5) + 32} °F`)
} else{
    console.log('temperatura invalid')
}

//convertir C to F
// C / 9/5 +32
//calcular los grados F



