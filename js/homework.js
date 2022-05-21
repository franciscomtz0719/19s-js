


/**
 * Ejercicio 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * ....
 * 3 x 10 = 30
 */

// let multiplier = parseInt(prompt('Ingrese un la tabla que desea consultar del 1-10'))

// if(multiplier <= 10){
//     for (i = 1; i <=10; i++) {
//         console.log(` ${multiplier} x ${i} = ${multiplier*i}`)  
// }
// } else {
//     console.log('Número fuera de rango')
// }


/**
 * Ejercicio 3
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * p.ej. "Hola mundo"
 * Consonantes -> hlmnd
 * Vocales -> oauo
 */

//   let phrase = prompt('ingrese una oración')
//   let fin = phrase.length -1



/**
 * 
 * Ejercicio 4
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 * p.ej. 12 -> 2,4,6,8,10,12
 * 
 */

//    let even = parseInt(prompt('ingrese un numero entre 10 y 100'))
//    let k = 2
//    let evenConcatenate = ""
 
//   if (even >= 10 && even <= 100) {
//       while (k <= even) {
               
//         evenConcatenate += [k,'']
//         k += 2


//   }
//   console.log(evenConcatenate)
// } else{
//     console.log('Numero fuera de rango')
// }
   

//palabra en reversa

const nameUser = prompt ('escribe un a plabra')
let strReversed = ''

for(let i = nameUser.length - 1; i >= 0; i--){
    strReversed += nameUser[i]
    console.log('i')
}
console.log(strReversed)



  

    








