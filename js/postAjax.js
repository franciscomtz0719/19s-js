const printPosts = (arrObjs) => {
    let template = arrObjs.reduce((acc, post) => {
        return acc += `
        <div class="card col-3 m-2">
        <img src="..." class="card-img-top" alt="...">
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
const primerPeticion = new XMLHttpRequest()
primerPeticion.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 299) {
       let posts = JSON.parse(response.target.responseText)
        printPosts(posts)
    }
}
primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
primerPeticion.send()
