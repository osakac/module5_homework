let x

if (typeof x === 'string') {
  console.log('x - строка');
} else if (typeof x === 'number') {
  console.log('x - число');
} else if (typeof x === 'boolean') {
  console.log('x - логический тип (boolean)');
} else {
  console.log('Тип x не определен');
}