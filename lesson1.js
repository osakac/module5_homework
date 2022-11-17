let number = +prompt('Введите значение')

if (typeof number === 'number' && !isNaN(number)) {
  if (number % 2 === 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
} else {
    console.log('Упс, кажется, вы ошиблись');
}