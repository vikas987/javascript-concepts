class Reactangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }
}

const rectangle = new Reactangle(10, 15);
console.log(rectangle.area);
