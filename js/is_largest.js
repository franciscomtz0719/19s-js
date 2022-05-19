let number1 = prompt ('Ingrese un número', 0)
let number2 = prompt ('Ingrese un segundo número', 0)
let number3 = prompt ('Ingrese un tercer número', 0)

if (number1 > number2 && number1 > number3){
    window.alert(`el numero mayor es el primero ${number1}`)
}else if (number2 > number1 && number2 > number3 ){
    window.alert(`el numero mayor es segudo ${number2}`)
} else if (number3 > number1 && number3 > number2){
    window.alert(`el numero mayor es el tercero ${number3}`)
} else {
    window.alert(`los numeros son iguales ${number3}`)
}