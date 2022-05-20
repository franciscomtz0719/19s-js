// ciclos

/**
 * 
 * 
 * for (inicio;fin;aumento/decremento)
 * 
 * while(){}
 * //centence
 * do {
 * //sentence
 * }while()
 * 
 */


// for(let i =0; i <=10; i++) {
//     console.log(`5 x ${i} = ${5*i}`);
// }

//'Hola koders'

// let str = 'Hola koders!'
// let fin = str.length -1

// for(let i =0; i <=fin; i++) {
//     console.log(str[i]);
// }

//imprimir en consola cada una de las vocales
// usando ciclos y condicionales.

let str = 'Hola koders!'
let fin = str.length -1

for(let i =0; i <=fin; i++) {
    if (
        str[i] !== 'a' && 
        str[i] !== 'e' && 
        str[i] !== 'i' && 
        str[i] !== 'o' &&
        str[i] !== 'u' &&
        str[i] !== ' '
        )
        {
        console.log(str[i]);
    }

}

