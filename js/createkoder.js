const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( method, `https://firststepjs-25904-default-rtdb.firebaseio.com${url}`, true)
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
  
// Create Koder
const koderCreaterd = (resp) => {

  if (resp.name !== ''){
    document.querySelector('#wrap__alert').classlist.remove('d-none')
        // timer
        setTimeout( () => {
          document.querySelector('#wrap__alert').classList.add('d-none')
          document.querySelector('#id__post').innerHTML = ''
      }, 4000)
      
      // clear form
      document.querySelector('#title').value = ''
      document.querySelector('#biography').value = ''
      document.querySelector('#bootcamp').value = ''
      document.querySelector('#age').value = ''
  }

}

let btnEnviar = document.querySelector ('create__post')
btnEnviar.addEventListener('click', () => {
  
  let name = document.querySelector('#name')
  let biography = document.querySelector ('#biography')
  let bootcamp = document.querySelector ('#bootcamp')
  let age = document.querySelector ('#age')

  if (name !== '' && biography !== '' && bootcamp !== '' && age !== '') {

      let newKoder = {
        name: name,
        biography: biography,
        bootcamp: bootcamp,
        age: age
      }
      console.log(newKoder)

      ajaxXHR(koderCreaterd, '/koder/.json', 'POST', newKoder )

  } else{
    alert('Algunos datos estan vacios')
  }

})