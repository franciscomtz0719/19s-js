// Ejercicios Obligatorios

/**
 * Dado el sigueinte arreglo de ciudades
 *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
 * Generar una funcion que capitalize cada elemento del array
 * => Se puede resolver con .forEach() o .map()
 */

//  let strToReverse = ['hola mundo']

//  const reverseStr = strToReverse.map((str) => {
//      let splited = str.toString().split('')
//      let reverse = splited.reverse()
//      let joinedArr = reverse.join('')
//      console.log(joinedArr)
//      return joinedArr
//  })
 
//  console.log(reverseStr)


// let countriesArray = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']

// const capitalizeArray = countriesArray.map ((str) => {

//     let strLower = str.charAt().toUpperCase()
//     let subStr = str.substring(1).toString().toLowerCase()
//     return strLower + subStr

// } )

// console.log(capitalizeArray)

/** 
 * Dado un arreglo con nombres de personas, 
 * Funcion que devuele un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
 * 
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
 * 
 * => Se puede resolver con .forEach() o .filter()
*/

// let namesArray = ['jorge','ana','ivan','sergio','oscar' ]
// let capitalizeName = []


// const vowelNames = namesArray.filter((nameStr) => {

//     // let vowelCapital = nameStr.charAt(0).toUpperCase()
//     //  console.log(vowelCapital)
//     // let vowelLowecase = nameStr.substring(1).toString().toLowerCase()
//     // console.log(vowelLowecase)
//     // console.log(vowelCapital + vowelLowecase)
//     if (nameStr.charAt(0).toUpperCase() === 'A' ||
//         nameStr.charAt(0).toUpperCase() === 'E' ||
//         nameStr.charAt(0).toUpperCase() === 'I' ||
//         nameStr.charAt(0).toUpperCase() === 'O' ||
//         nameStr.charAt(0).toUpperCase() === 'U') {
//             return nameStr
//         }
   
// }).map((nameArr) => {

//     let vowelCapital = nameArr.charAt(0).toUpperCase()
//     let vowelLowecase = nameArr.substring(1).toString().toLowerCase()

//     return vowelCapital + vowelLowecase

// }) 

// console.log(vowelNames)

// /**
//  * 
//  * Dado una arreglo compuesto por arreglos, 
//  * crea una funcion que calcule la suma de los arreglos
//  * 
//  * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
//  * -> 18
//  * 
//  */

// // let counter = 0
// let arregloDeArreglos = [[1,2,3] , [1,3,2] , [3,2,1]]
// // // arr.forEach(numero)

// const additionMultiArr = ((arregloDeArreglos) => {
//     let counter =0
//     arregloDeArreglos.forEach((arreglo) => {
//         arreglo.forEach ((sumando) => {
//             counter += sumando
//         })
//     })
//     return counter
// })
// console.log(additionMultiArr)

// let additionMultiArr = (  [	[1,2,3] , [1,3,2] , [3,2,1] ] ) 
// let suma = additionMultiArr.flat()
// console.log(suma)

// const arrAddition = additionMultiArr.((arr) => {
   

   
//     // console.log(arr)
//         // let newArr = arr.map((cv) => {
//         //     //console.log(cv)
//         //     suma = suma + cv 
//         // })
//         // console.log(suma)
// })
// console.log(arrAddition)


/**
 * 
 * Estudiar el  metodo reduce
 * https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
 * https://dataquarium.io/little-bits-reduce/
 * https://www.programiz.com/javascript/library/array/reduce
 */


/**
 * 
 * Estudiar el tema de Objetos
 * https://www.programiz.com/javascript/object
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://www.freecodecamp.org/espanol/news/javascript-crear-objecto-como-definir-objetos-en-js/
 * https://www.w3schools.com/js/js_objects.asp
 * 
 */



// Ejercicios opcionales


/**
 * 
    En un array con pedidos de un restaurant
    la estructura por cada pedido es:
    ['entrada','principal','postre','precio'],
    let pedidos = [
        ['ensalada de pepinos','paella','platano', 100'],
        ['ensalada de tomates','pescado','helado', 120],
        ['ensalada simple','paella','yogurt', 80],
        ['ensalada simple','enchiladas','yogurt', 80],
        ['ensalada cesar','salmón','platano', 100],
    ]
    Crear: 
    Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
    => Se puede resolver con .forEach() o .filter()
    Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
    => Se puede resolver con .forEach() o .filter()
    Funcion que devuelve los pedidos que tienen un precio superior a 90 
    => Se puede resolver con .forEach() o .filter()
    
*/

// let pedidos = [
//     ['ensalada de pepinos','paella','platano', 100],
//     ['ensalada de tomates','pescado','helado', 120],
//     ['ensalada simple','paella','yogurt', 80],
//     ['ensalada simple','enchiladas','yogurt', 80],
//     ['ensalada cesar','salmón','platano', 100],
// ]
