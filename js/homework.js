/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

koders.forEach((objCompleto, index, arrayObj) => {
    // console.log(`
    //     ${objCompleto.name} ${objCompleto.lastName}  
    //     tiene ${objCompleto.age} años y es  
    //     de la generacion ${objCompleto.generation}
    // `)
})



/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */

let totalAge = 0
koders.forEach((objCompleto, index, arrayObj) => {
    totalAge += objCompleto.age
})
console.log(totalAge)


let totalAgeREd = koders.reduce( (acc, cv) => {
    return acc + cv.age
}, 0) 

console.log(totalAgeREd)



/**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
 let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]

let totalReading = library.reduce( (total, libro) => {
    return libro.readingStatus ? total += 1 : total
}, 0)

console.log(totalReading)

let authors = library.map( (author) => {
    return author.author
})
console.log(authors)

let books = library.map( (book) => {
    return book.title
})

console.log(books)
