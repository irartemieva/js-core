//-------------------------------
//--------map method-------------
Array.prototype.myMap = function(callbackFn) {
  var arr = [];              
  for (var i = 0; i < this.length; i++) { 
     /* call the callback function for every value of this array and       push the returned value into our resulting array
     */
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
}
//-------------------------------
//-------------------------------
//flat method
const arr = [1, 2, [3, 4, [5, 6]]];

function flat(arr) {
  let result = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = [...result, ...flat(el)];
    } else {
      result = [...result, el];
    }
  })

  return result;
};

// console.log(flat(arr));
//-------------------------------
//-------------------------------
// defer method
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
}

function f(a, b) {
  alert( a + b );
}

//f.defer(1000)(1, 2);
//-------------------------------
//-------------------------------

// bind method - 2 implementations
function myBind(context, func) {
  this.context = arguments['0'];
  
  for (const [key, value] of Object.entries(context)) {
    this[key] = value;
  }

  return func();
}

function myBind(context, func) {
  return function(...args) {
    func.apply(context, args);
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Irina', age: 31, job: 'Frontend'};
const person2 = {name: 'Dave', age: 29, job: 'Programmer'}

// myBind(person1, logPerson)();
// myBind(person2, logPerson)();
//-------------------------------
//-------------------------------

// Promise.myAll
//TODO: доделать

Promise.myAll = function(data) {
  let result = [];
  for(let i = 0; i < data.length; i++) {
    data[i].then((value) => {
      console.log('pr', value);
      result.push(value);
    })
  };
  return new Promise(resolve => {
    console.log('all test');
    if (result.length !== 0) {
      console.log('sf');
      // setTimeout(() => {
      //   resolve(result);
      // }, 0);
    }
  });
}

Promise.myAll([sleep(3000), sleep(1000)]).then((data) => {
  console.log('myAll', data);
})
//-------------------------------
//-------------------------------
