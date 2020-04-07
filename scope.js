let globalVar = "global";

function local() {
  let localVar = "local";
  console.log(globalVar);
  console.log(localVar);
}

local();
console.log(localVar);
