const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getInputData() {
  let promise = new Promise((res, rej) => {
    readline.question("type something...", data => {
      res(data);
    });
  });

  return await promise;
}

async function main() {
  let result = await getInputData();
  console.log(result);
  process.exit();
}

main();
