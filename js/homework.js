/**
 * Ejercicio 1 *Obligatorio
 * Realizar una funcion que reciba como parametro 1 array
 * Y devuelva un array con solo los elementos Pares de ese array
 * p.ej.
 * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
 * -> evenOnly( [10, 2, 5] ) -> [10,2]
 * -> evenOnly() -> 'Se necesita un array'
 * 
 */
 let numArray = []


 const evenOnly = (arr) => {
    let onlyEven =[]
    let j = 0
    for (let i = 0; i <= arr.length; i++){
        //console.log(i)
        if ((arr[i] % 2) == 0) {
            onlyEven[j++]=arr[i]
          //  console.log(j)

        } else if (!arr.length) {
            console.log ('Se necesita un array')
        }
    }
    console.log (onlyEven)
}
evenOnly(numArray)


// let nums = [1,3,5,2,8,7];
// let sortedNums = nums.sort();
// console.log(sortedNums);


// let items = ["Kodemia", 12, "Francisco"];
// let itemsString = items.toString();
// console.log(itemsString);


// let states = ['zacatecas', 'durango', 'guanajuato', 'queretaro']
// let towns = ['jerez', 'canatlan', 'irapuato', 'juriquilla'] 
// let joinedArrays = states.concat(towns);
// console.log(joinedArrays);



 





/**
 * Ejercicio 2 *Opcional
 * Funcion que reciba como parametro una array de strings
 * y devuelva el primer y ultimo caracter de cada string
 * p.ej.
 * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
 */


/**
 * Ejercicio 3
 * Estudiar todos los métodos de Array
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 * https://www.programiz.com/javascript/library/array
 * 
 */
