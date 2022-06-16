
let idKoder = window.location.search.substring(10)
console.log(idKoder)

fetch(`https://firststepjs-25904-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
.then((response) => {

    if(!response.ok){
        throw new Error (`Algo salió mal ${response.status}`)
    }else{
        return response.json()
    }
})
.then((response) => {

    console.log(response)

    
    let {name, biography, bootcamp, age} = response
    
    let template = 
    `
                <div class="card">
                    <h5 class="card-header">${name}, ${age} años </h5>
                    <div class="card-body">
                        <h5 class="card-title"> ${bootcamp} </h5>
                        <p class="card-text"> ${biography}</p>
                        <a href="/index.html" class="btn btn-primary">Volver a listado</a>
                    </div>
                </div>
    `

document.getElementById('koder__detail').innerHTML = template
})




