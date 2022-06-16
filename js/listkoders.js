
fetch('https://firststepjs-25904-default-rtdb.firebaseio.com/koders/.json')
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
      let { bootcamp, name, age, biography } = response[key]
      template+= `
          <div class="col-12 col-sm-6 mb-3 ">
            <div class="card">
              <h5 class="card-header">${name}, ${age} años </h5>
              <div class="card-body">
                  <h5 class="card-title"> ${bootcamp} </h5>
                  <p class="card-text"> ${biography.slice(0,20)}...</p>
                  <a href="/interior.html?koderkey=${key}" class="btn btn-link btn-link__details">Ver Koder</a>
                  <a href="/updatekoder.html?koderkey=${key}" class="btn btn-link btn-link__edit">Editar Koder</a>
              </div>
            </div>
          </div>
      `
    }
  }
  document.querySelector('#card__koders').innerHTML = template
}).catch(err => {
  console.log(err)
})
