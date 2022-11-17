const arr = [1, '42', 78, true, 'fetch']

let isSame
arr.forEach(el => {
  if (el === arr[0]) {
    isSame = true
  } else {
    isSame = false
  }
})

console.log(isSame);