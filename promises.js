//-------------------------
const promise = new Promise((resolve, reject) => {
  console.log('test promise resolved');
  resolve(34);
});

promise.then((data) => {
  console.log('then',  data * 2);
})
//-------------------------
//sleep method
const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms)
  })
};

sleep(3000).then(() => {
  console.log('test');
})

Promise.all([sleep(1000), sleep(4000)]).then((ms) => {
  console.log('all promise', ms);
})

Promise.race([sleep(2000), sleep(3000)]).then((ms) => {
  console.log('race promise', ms);
})
//--------------------
//--------------------
// delay method
function delay(ms) {
  // ваш код
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
//--------------------
//--------------------

// Что выведет промис
Promise.resolve(123)
  .then(x => x + 1)
  .catch(x => x + 2)
  .then(x => console.log(x + 3));
//--------------------
//--------------------

