// Operadores de asignacion

let total = 0
let a = 4
let b = 6
let c = 0

total = a + b
//suma = suma + 5
//suma += 5 // acortar para cualqueir operacion se agrega el operador y esto hace que  el mismo valor de la variable a agregar
//total = total -3
//total -= -3
//total *=  3
//total /= -3
//total %= 3

//console.log(total)

// if (2 === '2'){ //false
//     console.log('son iguales')

// } else if( 3 === 3){
//     console.log('ento al else if')

// } else { //default
//     console.log('por defecto')
// }

// console.log('entro aqui')

let numero = 2
// if (numero % 2){
//     console.log('el numero es par')
// } else{
//     console.log('es impar')
// }

// operador ternario

// numero % 2 === 0 ? console.log('es par') : console.log('es impar')

// numero % 2 === 0
//     ?
//     console.log('es par')
//     :
//     console.log('es impar')

// let esPar = numero % 2 === 0 ? true : false
// console.log()


//SWITCH  minify
let age = 18
switch (age) {
    case 17:
        console.log('eres menor de edad')
        break;
    case 18:
        console.log ('eres mayor de edad')
        break
    default:
        console.log ('error')
        break;
}
