const arr = [3, 42, null, 35, 'string', 99, false, 66, NaN]

let even = 0
let odd = 0

arr.forEach(el => {
  if (typeof el === 'number' && !isNaN(el)) {
    if (el % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }
})

console.log(`Количество четных чисел - ${even}`);
console.log(`Количество нечетных чисел - ${odd}`);