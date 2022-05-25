

/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */


function reversedString(){

    let str = prompt('Ingrese una oración')
    let strLenght = str.length
    let strReversed = ''

    for (i = strLenght-1; i >= 0; i--) {
        strReversed += str[i]
    }
    window.alert(`reversedString ('${str}') --> ${strReversed}`)
}





/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */

// function addThreeNumbers(a, b, c=3){
//     if ((isNaN(a,b)) || 
//         (isNaN(c,b)) ||
//         (isNaN(a,b,c))){
//         return 'Faltan datos'
//     }
//     else{
//         return a+b+c
//     }

// }

// let p1 = parseInt(prompt('ingrese un numero1')) 
// let p2 = parseInt(prompt('ingrese un numero2')) 
// let p3 = parseInt(prompt('ingrese un numero3'))
// let sumaTotal = addThreeNumbers (p1, p2, p3)
// console.log(sumaTotal)

/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */

function convertTemp(){

    let gradosC = parseInt(prompt('Ingrese la temperatura en °C', 18))
    let conversion = 0

    if (isNaN(gradosC)){
        window.alert('faltan datos')
    }else{
        conversion =  gradosC * 9/5 + 32
        window.alert(`La temperatura en °F es ${conversion}`)
    }    


}


/**
 * Funcion que imprima las tablas del 1 al 10
 */

function multiplication () {
    let result = 0

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result = i * j
            console.log(`${i} x ${j} = ${result}`)
        }
 
    }
    
}


/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */

function addNumberLimit (a=3){
    let numberLimit = parseInt(prompt('ingrese un numero entre 1 y 100'))
    let sumContainer = 0

    for (let a=0; a<= numberLimit; a++){

        sumContainer = sumContainer + a
    }

    console.log (sumContainer)
}

