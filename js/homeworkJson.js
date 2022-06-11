//createPost(post)
const createPost = (objPost) => {
    console.log(JSON.stringify(objPost))
    const xhttp = new XMLHttpRequest()
    xhttp.open('POST', "https://firststepjs-25904-default-rtdb.firebaseio.com/posts.json",true)
    xhttp.onload = function(data){
        
        if (data.target.status >= 200 && data.target.status < 400) {
            console.log(data.target.response)
        }
    }
    xhttp.send (JSON.stringify(objPost))
}

//let posts = []
const addPost = () => {
    
    let post = {
        tittle: document.getElementById('post-title').value,
        body: document.getElementById('post-body').value,
        date: document.getElementById('post-date').value
    }
    
   // posts.push(post)
    document.forms[0].reset() 
    console.log(post)
    createPost(post)
    
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-button').addEventListener('click', addPost)
})

