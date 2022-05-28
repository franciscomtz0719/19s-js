//reduce
//reduce(callback,initalValue)

// let frutas = ['narajas', 'narajas', 'narajas']

// frutas.reduce ((recipiente, frutas, index, arr) =>{

// })

// let numeros = [1,2,3]
// const arrMultiple = numeros.reduce((acc, cv, index, arr) =>{
//     console.log(index,acc, cv)
//     return acc + cv
// },0)

// console.log(arrMultiple)

// let frutas = ['narajas', 'narajas', 'narajas']

// let vaso = frutas.reduce((recipiente, frutas) =>{
//     return recipiente + frutas
// },'')

// console.log (vaso)


// let nombre = ['Francisco','Manuel','Martinez','Ibarra']

// const iniciales = nombre.reduce ((acc, cv) => {

//     acc += cv.charAt(0).toLowerCase()

//     return acc

// },'')

// console.log (iniciales)

// const iniciales = nombre.reduce ((acc, cv) => acc += cv.charAt(0).toLowerCase(),'')

// console.log (iniciales)

/**
 * funcion con .reduce ()
 * getDoubleNumbers [4,7,9]
 * --> [8,14,18]
 */

arr = [4,7,9]

const getDoubleNumbers = (arr) => {

    return arr.reduce((acc, cv) => {
        acc.push(cv * 2)
        return acc
    },[])
}

console.log(getDoubleNumbers)