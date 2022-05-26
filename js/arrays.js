// let newArray = [1,2,3, 'str', [1,2]]

// console.log(newArray)
// console.log(newArray[3])

let arrayToReverse = [1,2,3]
let arrReversed = []
for (let i = arrayToReverse.length-1; i >= 0; i--){
    arrReversed.push(arrReversed[i])
}
console.log(arrReversed)