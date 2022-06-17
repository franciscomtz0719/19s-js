
fetch('https://firststepjs-25904-default-rtdb.firebaseio.com/books/.json')
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
    for (let key in response){
      let { name, author, portrait, genre, resume } = response[key]
      template+= `
          <div class="col-4 col-sm-3 m-3 ">
          <div class="card" style="width: 20rem;">
              <img src="${portrait}" class="card-img-top" alt="Book"/>
              <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${resume.slice(0,60)}...</p>
              </div>
              <ul class="list-group list-group-light list-group-small">
                  <li class="list-group-item px-4">Autor: ${author}</li>
                  <li class="list-group-item px-4">Genero: ${genre}</li>
              </ul>
              <div class="card-body">
                <a href="/interior.html?koderkey=${key}" class="btn btn-link btn-link__details">Ver Detalle</a>
                <a href="/updatekoder.html?koderkey=${key}" class="btn btn-link btn-link__edit">Editar</a>
              </div>
          </div>
      </div>
      `
    }
  }
  document.querySelector('#book__card').innerHTML = template
}).catch(err => {
  console.log(err)
})
