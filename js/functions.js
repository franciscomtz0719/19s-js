//funciones

// let strUser = prompt('Dame una palabra', "str").toLowerCase()
// let strReversed =''
// for (let i = strUser.length-1; i >= 0; i--) {
//     strReversed += strUser[i]    
// }
// console.log(strReversed)

function invertirString() {
    //sentencias
    let strUser = prompt('Dame una palabra', "str").toLowerCase()
    let strReversed =''
    for (let i = strUser.length-1; i >= 0; i--) {
        strReversed += strUser[i]    
    }

    console.log(strReversed)
}

//invocar la funcion
// reversedStr()


// function ejercicio1(){
// let iteratorEnd = 101
// let mutiplyRes1 = 0
// let mutiplyRes2 = 0
// let mutiplyRes3 = 0
// let iteratorStart = 3
// let sumAcumulator = 0
// let sumAcumulator2 = 0
// let sumAcumulator3 = 0
// let grandTotal = 0

// // CICLO FOR
// for (let i = 3; i <iteratorEnd; i++) {

//     mutiplyRes1 = i % 3
//     mutiplyRes2 = i % 5
//     mutiplyRes3 = i % 7

//     if (mutiplyRes1 === 0 ){
//         sumAcumulator += i
//     }else if (mutiplyRes2 === 0){
//         sumAcumulator2 += i
//     }else if (mutiplyRes3 === 0){
//         sumAcumulator3 += i
        
//     }
// }
//     grandTotal= sumAcumulator + sumAcumulator2 + sumAcumulator3
//     return(grandTotal)
// }

// function getNumber(){
//     let retorno = 'str de retorno'

//     console.log(retorno)
    //return termina la ejecucion de la function
    //devuelve un valor
    // return retorno
// }

// let otra = getNumber()

//funciones con parametros

// let a = 6
// let b = 7

// function suma(a, b){
//     let total = 0;
//     total = a + b
//     return total
// }

// let totalSuma = suma(a,b)

//parametros opcionales
// function sumaOpcional (p1, p2, p3 = 4){
//     return p1 + p2 + p3
// }
function sumaUsuario(a, b, c=5){
     
    return a + b + c
}

let p1 = parseInt(prompt('ingrese un numero1')) 
let p2 = parseInt(prompt('ingrese un numero2')) 
let p3 = parseInt(prompt('ingrese un numero3'))
console.log(p3)
let sumaTotal = sumaUsuario (p1, p2, p3)
console.log(sumaTotal)
