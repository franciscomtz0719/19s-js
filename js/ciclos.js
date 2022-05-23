/**
 * Ciclo while
 * y do while
 */

// let counter = 1

// while(counter <= 10){
//     //counter +1
//     console.log(`5 x ${counter} = ${5*counter}` )
//     counter++

// }

// let str = prompt ('Ingrese una oracion')
// let fin = str.length
// let i = 0

// while(i < fin) {

//     console.log(str[i])
//     i++
// }

/**
 * 
 * Imprimir el string invertido
 * 
 */ 
//  const nameUser = window.prompt('Escribe una palabra')
//  let stringReversed = ''
//  let finCadena = nameUser.length - 1

// while(finCadena >= 0 ){
// 	stringReversed += nameUser[finCadena]
//     finCadena--
// }
// console.log(stringReversed)


/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 
// const phrase = prompt('Escribe una frase').toLowerCase()
// let vowels = ''
// let consonants = ''
// let i =0
// let counter = phrase.length
// while(i<=counter) {
    
// 	if(phrase[i] !== ' ' && phrase[i] !== ',' && phrase[i] !== '.'){
// 		if(
// 			phrase[i] == 'a' || 
// 			phrase[i] == 'e' || 
// 			phrase[i] == 'i' || 
// 			phrase[i] == 'o' || 
// 			phrase[i] == 'u' || 
// 			phrase[i] == 'á' || 
// 			phrase[i] == 'é' || 
// 			phrase[i] == 'í' || 
// 			phrase[i] == 'ó' || 
// 			phrase[i] == 'ú'
// 		){
// 			vowels += phrase[i]
// 		} 
// 	}
// }
// console.log(vowels)


/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */


//do while

// let counter = 1

// do{

//     console.log(counter)
//     console.log( `5 x ${counter} = ${counter * 5}` )
// } while (counter<=10)

//  const nameUser = window.prompt('Escribe una palabra')
//  let stringReversed = ''
//  let finCadena = nameUser.length - 1

// do{
// 	stringReversed += nameUser[finCadena]
//     finCadena--
// }while(finCadena >= 0 )
// console.log(stringReversed)





//3. Imprimir en consola cada una de las consonantes
let str= 'hola koders'
let strConsonants=""
let contador=0

let strMin =str.toLowerCase()

// while(contador<str.length){
    // if( !(strMin[contador]=='a' || 
    //     strMin[contador]=='e' || 
    //     strMin[contador]=='i' || 
    //     strMin[contador]=='o' || 
    //     strMin[contador]=='u')){
    //     strConsonants+= strMin[contador]}
    //     contador++
// }

// console.log(strConsonants)

do{
    if( !(strMin[contador]=='a' || 
        strMin[contador]=='e' || 
        strMin[contador]=='i' || 
        strMin[contador]=='o' || 
        strMin[contador]=='u')){
        strConsonants+= strMin[contador]}
        contador++
}while(contador<str.length)

console.log(strConsonants)
