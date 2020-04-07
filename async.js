async function firstAsync() {
  return await new Promise((res, rej) => {
    setTimeout(() => {
      res("Done");
    }, 2000);
  });
}

async function main() {
  const data = await firstAsync();
  console.log(data);
}

main();
