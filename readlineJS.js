const readline = require("readline");
//const fileStream = fs.createReadStream('input.txt');

const rl = readline.createInterface({
  input: process.stdin, //or fileStream
  output: process.stdout
});

async function main() {
  for await (const line of rl) {
    console.log(line);
  }
}

main();
