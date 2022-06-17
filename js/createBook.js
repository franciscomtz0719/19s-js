let btnCreate = document.getElementById('sendBook')
btnCreate.addEventListener('click', () => {

  let nombre = document.getElementById('nombre').value
  let autor = document.getElementById('autor').value
  let portrait = document.getElementById('portrait').value
  let genre = document.getElementById('book-genre').value
  let resume = document.getElementById('resume').value
  
  console.log(nombre, autor, portrait, genre, resume)
  
  // validar la data 
  if(
    nombre === '' || 
    autor === '' || 
    portrait === '' || 
    genre === '' ||
    resume === ''
  ) {
    alert('Campos vacios')
  } else {
  
    // formar el nuevo koder
    let newBook = {
      name: nombre,
      author: autor,
      portrait: portrait,
      genre: genre,
      resume: resume
    }
  
    fetch( 'https://firststepjs-25904-default-rtdb.firebaseio.com/books/.json', {
      method: 'POST',
      body: JSON.stringify(newBook),
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

