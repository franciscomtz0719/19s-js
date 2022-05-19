let weather = prompt ('ingrese el clima con las opciones a, b, c ,d')
let celciusDegree = parseInt ( prompt('íngrese la temperatura aproximada en °C' ))
let farenheitDegree = celciusDegree * (9/5) + 32
switch (weather) {
    case 'a':
        console.log(`El clima es Soleado y la temperatura es de: ${celciusDegree * (9/5) + 32} °F`)      
        break;
    case 'b':
        console.log(`El clima es Lluvioso y la temperatura es de: ${celciusDegree * (9/5) + 32} °F`)      
        break;
    case 'c':
        console.log(`El clima es Nevado y la temperatura es de: ${celciusDegree * (9/5) + 32} °F`)      
        break;
    case 'd':
        console.log(`El clima es Nublado y la temperatura es de: ${celciusDegree * (9/5) + 32} °F`)      
        break;

    default:
        console.log('Opcion incorrecta')
        break;
}