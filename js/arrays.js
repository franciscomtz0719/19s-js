// .filter

// [1,2,3].filter(callback)

// let newArr = [1,2,3,4,5,6,7,8,9]
// let soloPares = newArr.filter((cv, index, arr) => {

//    // if (cv % 2 === 0) {
//    //    return cv
//    // }
//    return cv % 2 === 0

// }) 

// console.log(soloPares)

/**
 * Escribir una funcion que
 * filtra solo las ciudades
 * desde un array
 * resolver con foreach()
 * resolver con filter ()
 */

// let arrMultiple =[1,2,3, 'México', 'Peru', 'España', 3]

// const strArr = arrMultiple.filter((str) => {
//    strEval = typeof str
//    if (typeof str == 'string') {
//       return str
//    }

// })

console.log(arrMultiple)

let arrMultiple = [1,2,4, 'México', 'Perú', 'España', 3]

const strArr = arrMultiple.filter((element) => {
    console.log( typeof element )
    if ( typeof element === 'string' ) {
        return element
    }
}
)
console.log(strArr)