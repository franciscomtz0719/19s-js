/**
 * Objetos
 * propiedad: valor
 * key: valor
 */

let koder = {
    name: 'Francisco',
    generation: '19g',
    bootcamp: 'Js',
    horario: ['7-10', '12-4'],
    edad : 26,
    gender: 'male',
    lastBillDone: true,
    isActive: true,
    module: {
        js: true,
        maquetado : true,
        backend: true,
        reactive: false
    }
}

// console.log (koder)

// let generation = koder.generation
// let backendPased = koder.module.backend

// if (backendPased){
//     console.log (`
//         ${koder.name} si paso el módulo de backend
//         el horario es ${koder.horario[0]}`)
// }

// koder.lastBillDone
// ? console.log (`${koder.name} Realizó su último pago`)
// : koder.isActive = false

// console.log ( `${koder.isActive}` )

// let car = {}
// car.model = 'WRX'
// console.log ( car)

let koderAssings = {}

// koderAssings.name = 'Francisco'
// koderAssings.generation = '19g'
// koderAssings.bootcamp = 'js'
// koderAssings.horario = ['7-10']
// koderAssings.edad
// koderAssings.lastBillDone = true
// koderAssings.isActive = true
// koderAssings.module = {}
// //nested objects
// koderAssings.module.maquetado = true
// koderAssings.module.maquetado = true
// koderAssings.module.maquetado = false
// koderAssings.module.maquetado = false
// console.log (koderAssings)

koderAssings['names'] = 'Francisco'
koderAssings['generation'] = '19g'
koderAssings['bootcamp'] = 'js'
koderAssings['horario'] = ['7-10']
koderAssings['edad'] =27
koderAssings['lastBillDone'] = true
koderAssings['isActive'] = true
koderAssings['modules'] = {}
//nested objects
koderAssings['modules']['maquetado'] = true
koderAssings['modules']['maquetado'] = true
koderAssings['modules']['maquetado'] = false
koderAssings['modules']['maquetado'] = false
console.log (koderAssings)

let nomina = {
 //  key      val
    'Jorge': '20000',
    'Lenny': '30000',
    'Kike': '25000',
    'Ernesto': '20000'
}

//iternado objetos
//bucles
//for (item in objetos)

// for (item in nomina){
//     let key = item
//     let val = nomina
//     console.log(key, val[key])
// }

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */
let suma = 0
for (item in nomina){
    let key = item
    let val = nomina
    suma += parseInt(val[key]) 
    
}
console.log(suma)
/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */

const sumaObjeto = (sumaObj) => {
    let suma = 0
    for (item in sumaObj) {
        let key = item
        let val = sumaObj
        suma += parseInt(val[key]) 
    }
    return suma
}

console.log (sumaObjeto(nomina))

/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

let arrComp = [1,2,3]
 const isAnObjectOrArray = (element) => {

    if (typeof element === 'object'){
        console.log( `isAnObject`, element  );
    } else if (typeof element === 'array'){
        console.log( `isAnArray`, element );
    } else {
        console.log( `No es array ni objeto` );
    }
    return
}

console.log(isAnObjectOrArray(nomina))


let objectCar = {
    model: 'jetta',
    doors: 4,
    year: 2022,
    cilindraje: 4,
    color: 'rojo'
}

/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

//read
console.log(objectCar)

//update
objectCar.color = 'verde'

//delete
console.log(objectCar)
delete objectCar.model
console.log(objectCar)