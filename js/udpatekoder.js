let idKoder = window.location.search.substring(10)
console.log(idKoder)

// crear conexion
const xhttp = new XMLHttpRequest()
link = `https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`
console.log(link)
xhttp.open( 'GET', `https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`, true)
xhttp.onload = function(fillForm) {
    if(fillForm.target.status >= 200 && fillForm.target.status <= 399){

      let response = JSON.parse(fillForm.target.response)
      console.log(response)
        let { name, age, biography, bootcamp } = response

        document.getElementById('update__nombre').value = name
        document.getElementById('update__edad').value = age
        document.getElementById('update__biografia').value = biography
        document.getElementById('update__bootcamp').value = bootcamp

    }
  }
  xhttp.send()
  
// Update Koder
// let nombreOnFocus = document.getElementById('update__nombre')
// let edadOnFocus = document.getElementById('update__edad')
// let biografiaOnFocus = document.getElementById('update__biografia')
// let bootcampOnFocus = document.getElementById('update__bootcamp')

// nombreOnFocus.addEventListener('focus', clearSpace)
// edadOnFocus.addEventListener('focus', clearSpace)
// biografiaOnFocus.addEventListener('focus', clearSpace)
// bootcampOnFocus.addEventListener('focus', clearSpace)

// function clearSpace(){
//   nombreOnFocus.value = ''
//   edadOnFocus.value = ''
//   biografiaOnFocus.value =''
//   bootcampOnFocus.value = ''
// }


let btnUpdate = document.getElementById('updateKoder')
btnUpdate.addEventListener('click', () =>{

  let name = document.getElementById('update__nombre').value
  let age = document.getElementById('update__edad').value
  let biography = document.getElementById('update__biografia').value
  let bootcamp = document.getElementById('update__bootcamp').value

  if (
    name === ''||
    age === '' || 
    biography === '' ||
    bootcamp === ''
  ){
    alert('Campos vacios')
  } else {
    let updatedKoder = {
      name: name,
      age: age,
      biography: biography,
      bootcamp: bootcamp
    }

    console.log(updatedKoder)
    
    xhttp.onload = (actualizarKoder) => {
      
      if (actualizarKoder.target.status >= 200 && actualizarKoder.target.status < 400) {
        let actualizacion =   JSON.parse(actualizarKoder.target.response)
        alert(`Koder actualizado exitosamente con el id ${actualizacion.name} `)
      }
    }
    
    xhttp.open('PATCH', `https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
    xhttp.send( JSON.stringify(updatedKoder) )
  }
})
