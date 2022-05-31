/**
 * Tarea
 * REalizar los siguientes 3 ejercicios
 * 
 */

/**
 * 1. funcion con .reduce()
 * capitalizeNames( ['jorge','lUis', 'marcOs', 'mario'] )
 * -> ['Jorge','Luis', 'Marcos', 'Mario']
 */
let nombre = ['jorge','lUis', 'marcOs', 'mario']
let nombreMayuscula = []

const iniciales = nombre.reduce ((acc, cv) => {

    UpprCase = cv.charAt(0).toUpperCase()
    acc = cv.substring(1).toLowerCase()
    concatenado = UpprCase + acc
    nombreMayuscula.push(concatenado)
    return nombreMayuscula

},'')

console.log (iniciales)


/**
 * 2. funcion con .reduce()
 * Dado un array de numeros, filtras solo los pares
 * filterEvens( [2,3,4,5] )
 * -> [2,4]
 */

let toFilter = [2,3,4,5,6]
let filteredNumber = []

const filterEven = toFilter.reduce((acc, cv) => {

    return cv % 2 === 0 ? filteredNumber.push(cv) : acc
    // cv % 2 === 0 ? filteredNumber.push(cv) : acc
    //console.log(cv)
    //console.log(filteredNumber)
}, 0)

console.log (filteredNumber)
/**
 * 3. funcion con .reduce()
 * Dado un array de numeros, obtener la suma de solo los elementos positivos
 * addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 * -> 42
 */

numArr = [ 1, -4, 12, 0, -3, 29, -150]

const addAllPositives = numArr.reduce((arr, cv) => {

return cv > 0 ? arr + cv : arr

},0)

console.log(addAllPositives)

/**
 * 4. Estudiar Objetos y métodos de objetos
 *
 */


/**
 * Opcional
 * funcion con .reduce()
 * Dado un array de palabras, filtras las que son palindromos
 * onlyPalindrome( ['oso','pedro', 'jorge', 'seres'] )
 * -> ['oso','seres']
 */



