let num1 = parseInt (prompt ('Ingrese un numero', 0))
let num2 = parseInt (prompt ('Ingrese otro numero', 0))

// num1 > num2
//      ?
//      console.log (`${num1} es mayor que ${num2}`) 
//      :
//      console.log (`${num2} es mayor que ${num1}`)


     num1 !== num2 ? (
         num1 > num2 ?
         console.log (`${num1} es mayor que ${num2}`)
         :
         console.log (`${num2} es mayor que ${num1}`)
     )
     :
     console.log ('son iguales')