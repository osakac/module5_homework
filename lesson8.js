let person = new Map([
  ['name', 'Max'],
  ['age', 23],
  ['frontend-developer', true]
])

for (let key of person.keys()) {
  console.log(`Ключ - ${key}, значение - ${person.get(key)}`);
}