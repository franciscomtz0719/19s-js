let idBook = window.location.search.substring(10)
console.log(idBook)

fetch( `https://firststepjs-25904-default-rtdb.firebaseio.com/books/${idBook}.json` )
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
  if (!response){
    console.log('No response')
  }else{
    console.log(response)
    let { name, author, portrait, genre, resume } = response

    document.getElementById('update__nombre').value = name
    document.getElementById('update__autor').value = author
    document.getElementById('update__portrait').value = portrait
    document.getElementById('update__book-genre').value = genre
    document.getElementById('update__resume').value = resume

  }
}).catch(err => {
  console.log(err)
})


let btnUpdate = document.getElementById('updateBook')
btnUpdate.addEventListener('click', () =>{

  let nombre = document.getElementById('update__nombre').value
  let autor = document.getElementById('update__autor').value
  let portrait = document.getElementById('update__portrait').value
  let genre = document.getElementById('update__book-genre').value
  let resume = document.getElementById('update__resume').value
    if (
      nombre === ''||
      autor === '' || 
      portrait === '' ||
      genre === '' ||
      resume === ''
    ){
      alert('Campos vacios')
    } else {
      let updatedBook = {
        name: nombre,
        author: autor ,
        resume: resume,
        genre: genre,
        portrait: portrait   
      }

      fetch(`https://firststepjs-25904-default-rtdb.firebaseio.com/books/${idBook}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updatedBook),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(( response)=> {
        return response.json()
    })
    .then( (finalResponse) => {
        console.log(finalResponse)
        alert(`El usuario ${finalResponse.name} con el id ${idBook} ha sido actualizado`)
    })
    .catch( (err) => {
        console.log(error)
    })
    }
  })


  let btnDelete = document.getElementById('deleteBook')
  btnDelete.addEventListener('click', () =>{
  
    fetch(`https://firststepjs-25904-default-rtdb.firebaseio.com/books/${idBook}.json`, {
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
  