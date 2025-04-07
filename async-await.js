function task() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}
async function main() {
  await task(1000);
  console.log("Task1 completed");
  await task(1000);
  console.log("Task2 completed");
}
main();
