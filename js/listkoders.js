
const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
  const xhttp = new XMLHttpRequest()
  xhttp.open( method, `https://koders19gjs-default-rtdb.firebaseio.com${url}`, true)
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
          let response = JSON.parse(data.target.response)
          callback(response)
      }
  }
  if(method === 'GET' || method === 'DELETE'){
      xhttp.send()
  } else {
    xhttp.send( JSON.stringify(obj) )
  }
}

/* Estructura de cada koder
  {
    name: 'jorge',
    age: 30,
    bootcamp: 'js',
    biography: 'lorem ipsum dolot sit amet'
  }
*/

// uso de la funcion 
// GET , DELETE
// ajaxXHR(nombreDeFuncionAllamar, `/koders/.json`, 'GET')
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'DELETE')

// POST, PUT, PATCH
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'POST', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PUT', obj)
// ajaxXHR(nombreDeFuncionAllamar, `/koders/${idKoder}.json`, 'PATCH', obj)




// Listar todos los koders
console.log('SU codigo para editar un koder aquí')