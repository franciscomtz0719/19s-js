// DOM 

// Select element by id
document.getElementById('title')
// Select element by tag name   access to an spcecific element use []
document.getElementsByTagName('h1')[0]
// Select element by class name
document.getElementsByClassName('listaEjemplo')
// select element by tag name, class and id
//select the first coincident element
document.querySelector('.listaEjemplo')
document.querySelectorAll('.listaEjemplo')
document.querySelector('h1')

// select all coincidences 
let todosLosMenus = document.querySelectorAll('.listaEjemplo')

// todosLosMenus.forEach(cv => {
//     console.log(cv)
// })

//set, obtain, comprobe attributes
//select element to change
let titulo = document.querySelector ('.title')
titulo.setAttribute('data-id', 1 )
let atrubutoP = titulo.getAttribute('data-id')
console.log(atrubutoP)

//comprobe if an element exists
titulo.hasAttribute('data-id')
// true or false

//delete attributes
titulo.removeAttribute('id')

/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Todos los items, agregar la clase  'list__item'
 */
 const listWrap = document.querySelector('ul')
 const allOptions = document.querySelectorAll('.item')
// 1
listWrap.setAttribute('id', 'lista')
listWrap.setAttribute('class', 'lista')

// 2
allOptions.forEach( (item) => {
    item.removeAttribute('class')
})

// 3
allOptions.forEach( (item) => {
    item.setAttribute('class', 'list__item')
})



/**
 * Crear elementos html
 */

// CREAR
/* 
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul> 
*/
// Paso a paso
// let listaDos = document.createElement('ul')
// let item1 = document.createElement('li')
// let body = document.querySelector('body')

// let item2 = document.createElement('li')

// item1.textContent = 'item 1'
// item2.textContent = 'item 2'

// listaDos.appendChild(item1 )
// listaDos.appendChild( item2)

// body.appendChild( listaDos )

// dinamica
const listaDos = document.createElement('ul')

for( i = 1; i <= 40; i++) {

    let item = document.createElement('li')
    item.textContent = `item ${i}`
    listaDos.appendChild(item)
}

let parent = document.querySelector('.content')
// parent.appendChild( listaDos )


// AGREGAR texto a un elemento
// item1.textContent = 'item 1'

// AGREGAR dentro de otro elemento (al final)
// parentElement.appendChild( child )
// listaDos.appendChild(item1)
// document.querySelector('body').appendChild(listaDos)


// AGREGAR dentro de otro elemento (referenciado)
// parentNode.insertBefore(newNode, referenceNode);

let reference = document.querySelector('.subtitle2')
document.querySelector('.content').insertBefore( listaDos, reference )



/**
 * DOM
 * Como seleccionar elementos
 * Agregar / remover atributos
 * Crear Elementos
 * AGregar elementos al dOM
 */

