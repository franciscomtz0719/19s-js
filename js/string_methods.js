//class three string methods

//Ejercicio str.method()
let stringValue = 'Hola koders'
/**
 * 'Hola koders'
 * 'Cuantas vocales existen'
 */
console.log(stringValue.match(/[aeiou]/gi).length)
/**
 * 'Hola koders'
 * 'Cuantas caracteres son'
 */
 console.log(stringValue.length)
/**
 * 'Hola koders'
 * 'Cortar string en dos strings'
 * "Hola" "koders"
 */
 console.log(stringValue.split (" "))

 /**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/
console.log (stringValue.replace(/a|e|i|o|u /gi, "*"));