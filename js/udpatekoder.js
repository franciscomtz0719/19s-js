let idKoder = window.location.search.substring(10)
console.log(idKoder)

fetch( `https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json` )
.then(response => {
  //validar que la respuesta del servidor sea ok, comprobar primero error
  if (!response.ok) {
    throw new Error(`Algo salió mal, status ${response.status} ${response.statusText} type: ${response.type}`)
//si todo bien retornamos el json de la respuesta
  } else {
    return response.json()
  }
})
.then ((response) =>{
  let template = ''
  if (!response){
    console.log('No response')
  }else{
    console.log(response)
      let { bootcamp, name, age, biography } = response

        document.getElementById('update__nombre').value = name
        document.getElementById('update__edad').value = age
        document.getElementById('update__biografia').value = biography
        document.getElementById('update__bootcamp').value = bootcamp

  }
}).catch(err => {
  console.log(err)
})


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

      fetch(`https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updatedKoder),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(( response)=> {
        return response.json()
    })
    .then( (finalResponse) => {
        console.log(finalResponse)
        alert(`El usuario ${finalResponse.name} con el id ${idKoder} ha sido actualizado`)
    })
    .catch( (err) => {
        console.log(error)
    })
    }
  })


  let btnDelete = document.getElementById('deleteKoder')
  btnDelete.addEventListener('click', () =>{
  
    fetch(`https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`, {
      method: 'DELETE'
  })
  .then( response => {
      // comprobamos que el estatus de la respuesta es falso
      if (!response.ok) {
          // si si, lanzamos un error con un mensaje
          let err = new Error(`Algo salio mal, status: ${response.status} ${response.statusText} type: ${response.type}`)
          throw err
      } else {
          // sino, retornamos la respuesta al siguiente then
          return response.json()
      }
  })
  .then( (response) => {
      console.log(response)
      window.location.pathname = '/index.html'
  }).catch( err => {
      console.log(err)
  })
      
    })
  