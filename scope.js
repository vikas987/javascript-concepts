let globalVar = "global";

function local() {
  let localVar = "local"; // if you remove let variable localVar will be globally scoped.
  console.log(globalVar);
  console.log(localVar);
}

local();
// console.log(localVar); // throws error as localVar declared locally.
