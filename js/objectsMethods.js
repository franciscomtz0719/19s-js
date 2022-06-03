// /**
//  * Metodos de objetos
//  * Object.method
//  */

// //Object.keys()

// let obj = {
//     //key     value
//     'name' : 'Francisco',
//     'lastName': 'Martínez',
//     'age': 27
// }
// // ['name', 'lastName']
// let arrKeys = [] 
// for (property in obj) {
//     console.log(property)
//     arrKeys.push(property)
// }
// console.log(arrKeys)

// let keys = Object.keys(obj)
// console.log(keys)

// // Object.keys(obj).forEach((llave)) =>{
// //     console.log(obj[llave])

// // }

// //Object.assign()
// //Object.assign(obj, obj)

// let obj1 = {
//     name1 : 'francisco'
// }

// let obj2 = {
//     lastName1 : 'Martinez'
// }

// Object.assign(obj1, obj2)

// console.log(obj1, obj2)
// 35

// //Object.entries()

// let resultArr = Object.entries(obj)
// console.log(resultArr)

// //Object.values()
// // --> [valor1, valor2]

// let objValues = Object.values(obj)
// console.log(objValues)

// //Object.freeze()
// //Object.freeze(obj)

// //Object.create(obj)

// let galleta = {
//     forma: 'redonda',
//     sabor: 'vainilla',
// }
// let nuevaGalleta = Object.create(galleta)

// nuevaGalleta.decorado = 'batman'
// console.log(nuevaGalleta.sabor)
// console.log(nuevaGalleta)

// //Object.seal() && Object.freeze()

// // seal permite leer y acualizar
// //freeze bloquea todo
// let objSeal = {
//     'name': 'Kike',
//     lastName : 'acosta'
// }

// // Object.freeze(objSeal)

// // objSeal.name = 'nombre de reemplazo'

// // console.log(objSeal)

// Object.seal(objSeal)

// objSeal.name = 'juan'
// delete objSeal.name

// console.log(objSeal)

// //Object keys()
// //Object.values()
// //Object.entries()
// //Object.create()

// //let objLiteral = {}
// //let objCopia = Object.create(objLiteral)

// let empleados = {
//     name: 'francisco',
//     age: 26,
//     salarios: 4000,
//     puesto:'Supervisor',
//     idEmpleado: '6041'
// }

// let salarios2 = {
//     'jorge': 500,
//     'mario': 600,
//     'francisco': 400,
//     'pedro':1000
// }


// let totalEmpleados = Object.keys(salarios2).length
// let totalRed = Object.values(salarios2).reduce((acc, salario) => acc + salario)
// let totalFinal = 0
// let total = 
// Object.values(salarios2).forEach ((salarios) => {
//     totalFinal += salarios2
// })

// console.log (totalFinal)
// console.log(totalRed)

// llaves.map( (cv, index, array) => {
//     console.log(array);
//     //console.log(cv);
//    //console.log(aux.push(cv))
//    // cv.forEach((currentValue, index) => {
//    //  console.log()
//    // })
//   })


/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()
// const makePairs = (object) =>  {
// }

let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000,    
}
let equipo = {
    equipo: 'Equipo 1',
    integrantes: '4'
  }
  
  const makePairs = (object) =>  {
      return Object.entries(object)
    }
// // solución con .map()
// const makePairsMap = (object) => {

// }
const makePairsMap = object =>  Object.keys(object).map( cv => [cv,object[cv]])

console.log(makePairsMap(equipo));
/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */


const salariosOrdenados = ( salarios ) => {
  return Object.values(salarios).sort()
}

console.log(salariosOrdenados(salarios))

//solucion reducida con map



// solución con .entries()

  