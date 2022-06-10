
const printConsulta = (arrObjs) => {
  let template = arrObjs.reduce((acc, post) => {
    return acc += `
    <div class="card col-3 m-2">
    <img src="https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body}</p>
    </div>
    <div class="card-footer">
    <small class="text-muted">${post.id}</small>
    </div>
    </div>
    `
  }, '')
  document.querySelector('.card-container').innerHTML = template
}

const printConsultaUser = (arrObjs) => {
  let template = arrObjs.reduce((acc, user) => {
    return acc += `
    <div class="card col-3 m-2">
    <img src="https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.email}</p>
    </div>
    <div class="card-footer">
    <small class="text-muted">${user.phone}</small>
    </div>
    </div>
    `
  }, '')
  document.querySelector('.card-container').innerHTML = template
}

let toShow = {}
let emptyObject = []
// let consultaJson = ""
let selectionChange = document.getElementById('to-show-change')
console.log(selectionChange)
selectionChange.addEventListener('change', () =>{
    selectedItem = selectionChange.value
    console.log(selectedItem)
    if (selectedItem=== 'posts'){
      url = "https://jsonplaceholder.typicode.com/posts"
      console.log(selectedItem)
      console.log (url)
      const peticion = new XMLHttpRequest()
      peticion.onload = (response) => {
        if(response.target.status >= 200 && response.target.status <= 299) {
          toShow = JSON.parse(response.target.responseText)
          console.log( toShow)
          printConsulta(toShow)
        }
      }
      peticion.open("GET", url , false)
      peticion.send()

    }else if (selectedItem === 'users'){
      url = "https://jsonplaceholder.typicode.com/users"
      const peticion = new XMLHttpRequest()
      peticion.onload = (response) => {
        if(response.target.status >= 200 && response.target.status <= 299) {
          toShow = JSON.parse(response.target.responseText)
          console.log( toShow)
          printConsultaUser(toShow)
        }
      }
      peticion.open("GET", url , false)
      peticion.send()
    }else {
      printConsulta(emptyObject)
    }
})

