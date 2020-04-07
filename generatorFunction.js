function* firstGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const generator = firstGenerator(); // has to be assigned to a variable
console.log("firstGenerator");
console.log(generator); // Object [Generator] {}
console.log(generator.next()); //  { value: 1, done: false }
console.log(generator.next()); //  { value: 2, done: false }
console.log(generator.next()); //  { value: 3, done: false }
console.log(generator.next()); //  { value: undefined, done: false }

console.log(firstGenerator().next()); //  { value: 1, done: false }
console.log(firstGenerator().next()); //  { value: 1, done: false }

console.log("------------------------------------------------");

function* secondGenerator() {
  const x = yield 1;
  console.log(x);
  const y = yield 2;
  console.log(y);
}
console.log("secondGenerator");
const generator2 = secondGenerator();

console.log(generator2.next());
console.log(generator2.next(10)); // 10 replaces yield 1 in secondGenerator() and assigns 10 to x
console.log(generator2.next(20)); // 10 replaces yield 2 in secondGenerator() and assigns 20 to y

console.log("------------------------------------------------");

function* thirdGenerator(i) {
  console.log(i);
  const x = 10 * (yield i * 5);
  console.log(x);
  const y = 5 * (yield x * 2);
  console.log(y);
}

generator3 = thirdGenerator(10);

console.log("thirdGenerator");

console.log(generator3.next(5)); // argument 5 will be ignored as there is no previous yield yet | 10 { value: 50, done: false }
console.log(generator3.next(20)); // 20 will replace yield(i * 5) | 200 { value: 400, done: false }
console.log(generator3.next(1)); // 5 { value: undefined, done: true }

console.log("------------------------------------------------");

function foo(x) {
  console.log(x);
}

function* fourthGenerator() {
  yield;
  foo(yield "Hi there.");
}

generator4 = fourthGenerator();

console.log(generator4.next()); // { value: undefined, done: false }
console.log(generator4.next()); // { value: 'Hi there.', done: false }
generator4.next("foo called"); // foo called
