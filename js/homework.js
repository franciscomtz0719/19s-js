// Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */

// let iteratorEnd = 101
// let mutiplyRes1 = 0
// let mutiplyRes2 = 0
// let mutiplyRes3 = 0
// let iteratorStart = 3

//CICLO FOR
// for (let i = 3; i <iteratorEnd; i++) {

//     mutiplyRes1 = i % 3
//     mutiplyRes2 = i % 5
//     mutiplyRes3 = i % 7

//     if (mutiplyRes1 === 0 ){
//         console.log(i)
//     }else if (mutiplyRes2 === 0){
//         console.log(i)
//     }else if (mutiplyRes3 === 0){
//         console.log(i)
//     }

// }

// CICLO WHILE
// while (iteratorEnd >= iteratorStart){
//         mutiplyRes1 = iteratorStart % 3
//         mutiplyRes2 = iteratorStart % 5
//         mutiplyRes3 = iteratorStart % 7

//         if (mutiplyRes1 === 0 ){
//             console.log(iteratorStart)
//         }else if (mutiplyRes2 === 0){
//             console.log(iteratorStart)
//         }else if (mutiplyRes3 === 0){
//             console.log(iteratorStart)
//         }

//         iteratorStart++
// }

// CICLO DO WHILE

// do{
//             mutiplyRes1 = iteratorStart % 3
//             mutiplyRes2 = iteratorStart % 5
//             mutiplyRes3 = iteratorStart % 7

//             if (mutiplyRes1 === 0 ){
//                 console.log(iteratorStart)
//             }else if (mutiplyRes2 === 0){
//                 console.log(iteratorStart)
//             }else if (mutiplyRes3 === 0){
//                 console.log(iteratorStart)
//             }

//             iteratorStart++
// } while (iteratorEnd >= iteratorStart)



/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */

// let endPoint = parseInt(prompt('Ingrese un número entre 1 y 100'))
// let suma = 0
// let iterator = 0
//CICLO FOR
// for (let i = 0; i <= endPoint; i++) {
//     suma= suma + i
// }

//CICLO While
// while (iterator <= endPoint) {

//     suma = suma + iterator
//     iterator++
// }

//CICLO DO WHILE20

// do {
//     suma = suma + iterator
//     iterator++
// } while (iterator <= endPoint)


// window.alert(`El resultado de la suma es ${suma}`)

/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */


let str = prompt('Ingrese una oración', 'Hola E')
let containerA = 0
let acomulator = str.length
let containerE = 0
let counter = 0
let strMin = str.toLowerCase()

// for (let i = 0; i < acomulator; i++) {   
//     if( strMin[i]==='a'){
//         containerA += 1 
//     }else if( strMin[i]==='e'){
//         containerE += 1
//     }else{
//         console.error ('no contiene letras A ni E')
//     }
// }

// while(counter<acomulator){
//         if( strMin[counter]==='a'){
//         containerA += 1 
//     }else if( strMin[counter]==='e'){
//         containerE += 1
//     }
//     counter++
// }

do {
    if( strMin[counter]==='a'){
        containerA += 1 
    }else if( strMin[counter]==='e'){
        containerE += 1
    }
    counter++
} while(counter<acomulator)


console.log(`La oración "${str}" contiene ${containerA} Letras A`)
console.log(`La oración "${str}" contiene ${containerE} Letras E`)



/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 * 
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 * 
 */
