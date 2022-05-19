//convertir los grados celcius to farenheit 
//imprimir en consola
let celcius = prompt ('temperatura actual', 23)
if (celcius === null){
    console.log('error: celcius')
} else {
    let far = parseInt(celcius)
    let menssageToShow = `La temperatura es ${far * (9/5) + 32} °F`
    window.alert(menssageToShow)
}