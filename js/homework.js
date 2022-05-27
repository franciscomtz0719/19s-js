


/**
 * Funcion que reciba una palabra
 * Retorne la palabra invertida
 *
 * reverseStr('hola mundo')
 * -> 'odnum aloh'
 * 
 * Usar solo metodos de str y array
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

/**
 * Funcion que reciba un array de numeros
 * y devuelva el promedio de todos los elementos
 * 
 * getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

let numArr = [10, 8, 9, 7]
let divisor = numArr.length
let sum = 0

const getAverage = numArr.reduce((accum, currentValue) => {
    
    return accum + currentValue

})
let finalAverage = getAverage/divisor
console.log(finalAverage)

/**
 * Funcion que reciba un array de strings
 * y devuelva un array indicando si son palindromos o no
 * 
 * arePalindrome( ['oso','juan', 'seres'] )
 * -> [true, false, true]
 */


//  let strPalindrome = ['oso','juan', 'seres']


//  const arePalindrome = strPalindrome.map((str) => {
//      let splited = str.toString().split('')
//      let reverse = splited.reverse()
//      let joinedArr = reverse.join('')
//     //  console.log(splited)
//     //  console.log(reverse)
//     //  console.log(joinedArr)
//      return joinedArr
//  })
 
// // console.log(strPalindrome)
// // console.log(arePalindrome)

// const arrComparation = ((strPalindrome, arePalindrome) => {
//     let boolCompar = strPalindrome.map(str1 => {
//         console.log((str1))
//         return arePalindrome.includes(str1)
//     })
//     return boolCompar
// })

// console.log(arrComparation(strPalindrome, arePalindrome))

/**
 * Estudiar los métodos de array
 * .filter()
 * .reduce()
 */