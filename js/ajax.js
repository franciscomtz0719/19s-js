const createUser =  ( objUser ) => {
    console.log(JSON.stringify(objUser))
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST",  
    "https://koders19gjs-default-rtdb.firebaseio.com/users/.json", true)
    xhttp.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
  }

let user ={
    name: 'Francsico',
    lastName : 'Martinez',
    age: 20
}

// createUser(user)

const updateUser = (userUpdated) => {
    const updatexhr = new XMLHttpRequest()
    updatexhr.open('PATCH','https://firststepjs-25904-default-rtdb.firebaseio.com/users/-N4ALM6Nn9dyUKr9ti-a.json',true )

    updatexhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status < 400) {
            console.log(response.target)
            console.log(response.target.response)
        }
    }
    updatexhr.send(JSON.stringify(userUpdated))
}

let updatedUser = {
    name: 'Francsico Manuel',
    lastName : 'Martinez Ibarra',
    age: 27
}

const deleteUser  = ( idUser ) => {
    const deletexhr = new XMLHttpRequest()
    deletexhr.open(
      'DELETE', 
      `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
      true
    )
    deletexhr.onload = (response) => {
      if(response.target.status >= 200 && response.target.status <= 399){
        console.log(response.target)
        console.log(response.target.response)
      }
    }
    deletexhr.send()
  }
  
  // deleteUser( '-N4AGk7rqMOm4L4KQ6eD')