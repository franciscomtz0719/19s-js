//map()
//filter()

// let arr = [1,2,3,4]

// // for (i = 0; i < arr.length; i++){
// //     console.log (arr[i])
// // }

// //arr.forEach((valorDeCadaIteracion, index (indicice del elemento), arrayOriginal) => {})
// arr.forEach((value, index, arr) => {
//     console.log (value, index, arr)
//     //cv = Core Value
// })

// //para aceder unicamente a 1 o 2 de items se tiene que escribir compelto 
// //y solo llamar los que se requeiren
// arr.forEach((value, index, arr) => {
//     console.log (value, arr)
// })
// // otra forma de acceder al valor del indice
// arr.forEach((value) =>  console.log (value))

/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 * 
 */

//  let arrCities = ['méxicO', 'Rio', 'Los Angeles']
//  //let someString = 'los angeles';
//  //Escribir una funcion
//  //Reciba como parametro un array de ciudades
//  //Retornar las ciudades capitalizadas
 
//   let capitalizeCities = ( arrCities = [] ) => {
//       arrCities.forEach((currentValue, index, arr)  => {
//          let words = currentValue.split(' ');
 
//          words.forEach( (currentValue) => {
//              let primerCaracter = currentValue.charAt(0).toUpperCase();
//              let cadenaSinPrimerCaracter = currentValue.substring(1, currentValue.length).toLowerCase();
//              //let resultado = ;
            
//              console.log(primerCaracter + cadenaSinPrimerCaracter);

//              //declarar array vacia y hacer push en cada elemento 
//          })
 
//       } )
//   }
 
 
//  console.log(capitalizeCities(arrCities));
 
/**
 * .map()
 * [1,2,3,4,5,6,7,8,9,10]
 * [2,4,6,8,10...20]
 */

// let mapArr = [1,2,3,4,5,6,7,8,9,10]

// let doubleArr = mapArr.map((cv, index,arr) => {
//     let transformed = cv * 2
//     return transformed
// })

// console.log (mapArr)
// console.log (doubleArr)

/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * -> ['ha','mo']
 * .map()
 */
 let arrStr = ['hola','mundo']

 let cropped = arrStr.map((str) => {
    let sliced = str.charAt(0) + str.charAt((str.length)-1)
    return sliced
 } )
    
 console.log(cropped)

