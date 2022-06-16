let btnCreate = document.getElementById('sendKoder')
btnCreate.addEventListener('click', () => {

  let nombre = document.getElementById('nombre').value
  let age = document.getElementById('edad').value
  let biography = document.getElementById('biografia').value
  let bootcamp = document.getElementById('bootcamp').value
  
  console.log(nombre, age, biography, bootcamp)
  
  // validar la data 
  if(
    nombre === '' || 
    age === '' || 
    biography === '' || 
    bootcamp === ''  
  ) {
    alert('Campos vacios')
  } else {
  
    // formar el nuevo koder
    let newKoder = {
      name: nombre,
      age: age,
      biography: biography,
      bootcamp: bootcamp
    }
  
    fetch( 'https://firststepjs-25904-default-rtdb.firebaseio.com/koders/.json', {
      method: 'POST',
      body: JSON.stringify(newKoder),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(( response)=> {
      return response.json()
  })
  .then( (finalResponse) => {
  console.log(finalResponse)
  
  })
  .catch( (err) => {
      console.log(error)
  })
  
  }
  

  
})

