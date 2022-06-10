let users = []

const filterUsers = (strToFilter) => {

    strToFilter = strToFilter.toLowerCase()
    let filterUsers = users.filter((cv)=> {
        if(
            cv.name.toLowerCase().includes(strToFilter) ||
            cv.username.toLowerCase().includes(strToFilter) ||
            cv.email.toLowerCase().includes(strToFilter)

        ){ //sentencias
            return cv
        }
    })
    return filterUsers
}


const printUsers = (arrObjs) => {
    let template = arrObjs.reduce((acc, user,) => {
        return acc += `
            <li class="list-group-item d-inline-flex justify-content-between align-items-start homework-list__element">
            <div class="ms-2 me-auto">
              <div class="fw-bold">${user.name}</div>
              ${user.email}
            </div>
            <span class="badge bg-primary rounded-pill">${user.phone}</span>
          </li>
        `
    }, '')
    document.querySelector('.homework-list').innerHTML = template
}


let inputSearch = document.getElementById('filter__value')
inputSearch.addEventListener('keyup', () =>{

    //obtener el valor a buscar
    let searchItem = inputSearch.value
    //imprimir en consola
    let usersFiltrados = filterUsers(searchItem)
    
    printUsers(usersFiltrados)
    //agregar al layout en homwork list
    console.log (usersFiltrados)
})

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()

// Define a callback function
primerPeticion.onload = (response) => {
    // Here you can use the Data
    console.log('REspuesta lista')
    console.log(response.target)

    if(response.target.status >= 200 && response.target.status <= 299) {
        // la respuesta fue satisfactoria
        console.log( response.target.responseText )
        users = JSON.parse(response.target.responseText)
        printUsers(users)
    }
}
// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/users", false)
// console.log(primerPeticion)
primerPeticion.send()
// console.log(primerPeticion)