function* generator(i) {
  yield i;
  yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);

function* generator2() {
  let i = 1;
  while (true) {
    i++;
    yield i;
  }
}
const gen2 = generator2();
for (let i = 1; i < 10; i++) {
  console.log(gen2.next().value);
}
