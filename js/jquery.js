



// Seleccion de elementos
// Vanilla Js
let title = document.querySelector('.faketitle')
console.log(title)

// jQuery 
// $('selector')
let titleJQ = $('.faketitle')
console.log(titleJQ)

// agregar / eliminar una clase
title.classList.add('clasevanilla')
$('.faketitle').addClass('claseJQ')

title.classList.remove('clasevanilla')
$('.faketitle').removeClass('claseJQ')

// Modificar texto
title.innerText = 'Titulo con vanilla'
$('.faketitle').text('Titulo con JQ')

// modificar html interior 
title.innerHTML = '<span>titulo con vanilla</span>'
//!jQuery
$('.faketitle').html('<span>titulo con JQ</span>')

// //!seleccion de multiples elementos
// //*normalmente se hace de esta manera para agregar clases
// let allLi = document.querySelector('li')
// allLi.forEach((item) => {
//     item.classList.add('list__item')
// })

//!agregar una clase por jQuery
$('li').addClass('list__item')

//! cambiar css con jQuery

$('li').addClass('list__item-css').css('color','red')


//*ocultar y mostar elementos

$('.ocultar').hide()