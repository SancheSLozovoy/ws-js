// Обновите функцию promiseStack, таким образом, чтобы она принимала второй необязательный аргумент отвечающий за количество параллельно обрабатываемых промисов.
// Результатом выполнения данного кода должно быть следующее:
// через 4 секунды в консоль выведется одновременно две “1”
// еще через 2 секунды одновременно две “2”
// еще через 1 секунду одновременно две “3”
// еще через 3 секунды “4”

// promiseStack([
//   () => asyncTimeout(4000).then(() => console.log(1)),
//   () => asyncTimeout(4000).then(() => console.log(1)),
//   () => asyncTimeout(2000).then(() => console.log(2)),
//   () => asyncTimeout(2000).then(() => console.log(2)),
//   () => asyncTimeout(1000).then(() => console.log(3)),
//   () => asyncTimeout(1000).then(() => console.log(3)),
//   () => asyncTimeout(3000).then(() => console.log(4)),
// ], 2);

async function promiseStack(functions, curr) {
    if (curr < 1){
        return false;
    }
    while(functions.length > 0) {
      const tasks = functions.splice(0, curr);
      const promise = tasks.map(task => task());
      await Promise.all(promise)
    }
  }

function asyncTimeout(timeout){
    return new Promise((resolve) => 
        setTimeout(resolve, timeout)
    )
}

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
], 2);