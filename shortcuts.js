let promise1 = new Promise((fulfill, reject) => {
  fulfill('test1');
});

let promise2 = Promise.resolve('test2');

let promise3 = new Promise((fulfill, reject) => {
  reject(new Error('error1'));
});

let promise4 = Promise.reject(new Error('error4'));

promise1.then(console.log);
promise2.then(console.log);
promise3.catch((err)=>console.log(err.message));
promise4.catch((err)=>console.log(err.message));
