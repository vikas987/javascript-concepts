class A {
  a() {
    return this;
  }

  static b() {
    return this;
  }
}

const c = new A();
console.log(c);
console.log(c.a());
console.log(A.b());
const d = c.a;
console.log(d());
const e = A.b;
console.log(e());
