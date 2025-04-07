function task1(callback) {
  setTimeout(() => {
    console.log("Task1 completed");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task2 completed");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task3 completed");
    callback();
  }, 1000);
}
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All task completed");
    });
  });
});
