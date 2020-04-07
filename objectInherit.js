let a = {
  b: true
};
let c = {
  d: false
};

c.__proto__ = a;

console.log(a.b, a.d, c.b, c.d);
// a.d will undefined because c is inheriting object a
