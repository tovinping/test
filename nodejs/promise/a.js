function MyPromise(fn) {
  this.thenQueue = []
  this.catchQueue = []
  new Promise(async (res, rej) => {
    this.resolve = res;
    this.reject = rej;
    try {
      const data = await fn();
      res(data);
    } catch (error) {
      rej(error);
    }
  })
    .then((data) => {
      this.thenQueue.forEach(cb => cb(data))
      this.thenQueue = []
    })
    .catch((err) => {
      this.catchQueue.forEach(cb => cb(err))
      this.catchQueue = []
    });
  this.then = (fn) => {
    this.thenQueue.push(fn)
  };
  this.catch = (fn) => {
    this.catchQueue.push(fn)
  };
}
function historyApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
}

function loadHistory() {
  const p = new MyPromise(() => historyApi());
  p.then((data) => {
    console.log('ccc', data)
  })
  return p;
}
async function main() {
  try {
    const p = loadHistory();
    p.catch((err) => console.log("err=", err));
    p.then((res) => console.log("r2", res));
    setTimeout(() => {
      console.log("sss");
      p.reject("aaa");
    }, 1000);
    // p.then(r => console.log('rrr=', r))
  } catch (error) {
    console.log("cccc", error);
  }
}
main();
