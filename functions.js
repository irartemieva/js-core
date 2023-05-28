//-----------------------------------------
// Найти пересечение двух массивов
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection (a, b) {
  let third = [];
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j< b.length; j++) {
      if (a[i] === b[j]) {
        third.push(a[i]);
      }
    }
  }
  alert(third);
}

// intersection(first, second) // -> [3, 4]
//---------------------------
//---------------------------

// Closure + function expression
var f = function() {
  console.log(1);
}

var execute = function(f) {
  setTimeout(f, 1000);
}

//execute(f);
f = function() {
  console.log(2);
}
//---------------------------
//---------------------------
// Каррирование
function sum(number) {
  let result = number;
  console.log(result);

  return function func() {
    const args = arguments;
    if (args?.length) {
      result += args['0'];
      console.log(result);
      return func;
    }
  }
}

//let f1 = sum(1)(2)(3);
//f1();
//---------------------------
//---------------------------

// Сравнить 2 строки на идентичность
function compare(str1, str2) {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  let arrAreTheSame = true;

  arr1.forEach((elem, index) => {
    if (elem !== arr2[index]) {
      arrAreTheSame = false;
    }
  });

  return arrAreTheSame;
}

// console.log(compare('doog', 'ddog'));
//---------------------------
//---------------------------

// Найти нечётные элементы и вернуть новый массив
const array = [ 1, 4, 5, 6, 7, 78];

function odd(arr) {
  return arr.filter(element => element % 2 !== 0)
}

// console.log(odd(array))
//---------------------------
//---------------------------

// setTimeout/setInterval
function printNumbers1(from, to) {
  setInterval(() => {
    if (from <= to) {
      console.log(from);
      from += 1;
    }
  }, 1000);
}

// printNumbers1(1, 5);

function printNumbers2(from, to) {
  let numberToPrint = from;
  setTimeout(function test() {
    if (numberToPrint <= to) {
        console.log(numberToPrint);
        numberToPrint += 1;
        setTimeout(test, 1000);
      }
  }, 1000)
}
// printNumbers2(1, 5);
//---------------------------
//---------------------------

// Camelize a string
function camelize(str) {
  let newArr = str.split('-').map((elem, index) => {
    if (index > 0) {
        elem = elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
    }
    return elem
  });

  console.log(newArr.join(''));
}

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");
//---------------------------
//---------------------------
// фильтрация массива по диапозону чисел
function filterRange1(arr, a, b) {
  let filteredArr = [];
  for (let i = a; i <= b; i++) {
    if (arr.includes(i)) {
      filteredArr.push(i);
    }
  }

  return filteredArr;
}

function filterRange2(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}

function filterRangeInPlace(arr, a, b) {
  arr.filter((item, index) => {
    if (item >= a || item <= b) {
      arr.splice(index, 1);
    }
  })
}
//let arr1 = [5, 3, 8, 1];
//filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4

//console.log( arr1 ); // [3, 1]
//---------------------------
//---------------------------

// Вернуть пропущенное число
function returnValue(arr) {
  let valueX = 0;
  arr.sort().forEach((elem, index) => {
    if (arr[index + 1] - elem > 1) {
      valueX = elem + 1;
    }
  });
  return valueX;
} 

//console.log(returnValue([1, 2, 3, 5, 6])) // 4
//---------------------------
//---------------------------

// IIFE - immediately invoked function expression
// (function() {
//   console.log('start');
//   for (var i = 0; i < 100; i++) {
//     ((i) => setTimeout(() => console.log(i), 1000))(i);
//   }
//   console.log('end');
// })();
 
// (function() {
//   var f = [];
//   for (var i = 0; i < 100; i++) {
//     f[i] = () => console.log(i);
//   }
//   f[9]();
//   f[8]();
// })();
//---------------------------
//---------------------------

// Get tree values
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3 },
      ]
    },
    {
      value: 4,
      children: [
        { value: 5 },
        { value: 6 }
      ]
    }
  ]
}

function getTreeValues(tree) {
  const stack = [tree];
  const result = [];
  while(stack.length > 0) {
    const node = stack.pop();
    if(node.value !== undefined) {
      result.push(node.value)
    }
    if(node.children?.length) {
      stack.push(...node.children);
    }
  }
  return result;
}

//console.log(getTreeValues(tree));
//---------------------------
//---------------------------

// Get value by path
function get(obj, path, defaultValue) {
  // your code here
  let arrOfPath = path.split(".");
  console.log(obj[arrOfPath[0]][arrOfPath[1]]);
}

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

// get(obj, 'a.b');   // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e');   // 'f'
// get(obj, 'a.x.e'); // undefined
// get(obj, 'a.x.e', true); // true
// get(obj, 'a.x.e', 'My default value'); // My default value
//---------------------------
//---------------------------

//
