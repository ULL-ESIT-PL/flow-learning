// @flow
function add(a: number, b: number): number {
  return a + b;
}

type Person = {
  name: string,
  age: number
};

const greet = (person: Person): string => {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
};

console.log(add(5, 3));
console.log(greet({ name: "Alice", age: 30 }));