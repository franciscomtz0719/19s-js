/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */
const idUnorderList = document.querySelector('ul')
const allListElement = document.querySelectorAll('li')

idUnorderList.setAttribute('id', 'menu')
idUnorderList.setAttribute('class', 'menu')

allListElement.forEach( (item) => {
    item.setAttribute('class', 'list__item')
})
/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item_koder'
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

// let kodersName = []
// for (key in koders) {
//     // console.log(koders[key].name)
//     kodersName.push(koders[key].name)
//     // console.log(kodersName)
// }
// console.log(kodersName)
let dinamicList = document.getElementById('dinamic-list')
koders.forEach ((cv)=> {
    let li = document.createElement('li')
    li.innerText = cv.name
    dinamicList.appendChild(li)
})
/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */

let tbody = document.querySelector('tbody')
koders.forEach((koder, index, arr) =>{
    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.textContent = koder.name
    tr.appendChild(tdName)
    let tdAge = document.createElement('td')
    tdAge.textContent = koder.age
    tr.appendChild(tdAge)
    let tdGen = document.createElement('td')
    tdGen.textContent = koder.generation
    tr.appendChild(tdGen)

    tbody. appendChild(tr)

})