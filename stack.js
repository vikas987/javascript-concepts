const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function Stack(maxSize) {
  this.stack = [];
  this.top = -1;
  this.maxSize = maxSize;
}

Stack.prototype.push = function() {
  readline.question("Enter the number you want to insert into stack", data => {
    if (this.stack.length >= this.maxSize) {
      console.log("Stack overflow");
      getInput(this.stack);
    } else {
      this.top = this.top + 1;
      this.stack.push(data);
      console.log("Item added");
      getInput(this.stack);
    }
  });
};

Stack.prototype.pop = function() {
  if (this.top < 0) {
    console.log("Stack underflow");
    getInput(this.stack);
  } else {
    this.top = this.top - 1;
    item = this.stack.pop();
    console.log("Removed element ", item);
    getInput(this.stack);
  }
};

function getInput(stack) {
  readline.question(
    "Enter '\n' 1 for push '\n' 2 for pop '\n' 3 for close '\n'",
    data => {
      switch (data) {
        case 1:
          stack.push();
          return;
        case 2:
          stack.pop();
          return;
        default:
          return;
      }
    }
  );
}

const stack1 = new Stack(5);

getInput(stack1);
