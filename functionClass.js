function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  return "hi";
};

// static method
User.sayHello = function() {
  return "hello";
};

// Static property
User.name1 = "Jayanth";

const u = new User("Vikas");

u.one = function() {
  return "one";
};

const b = new User("Jayanth");

console.log(u.sayHi(), User.sayHello(), u.name, User.name1, u.one());
