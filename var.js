//----------------------
// var извращения
var a1 = 1;
function b1(a1) {
  console.log(a1);
}

b1(); // вернёт undefined
//---------

var a2 = 5;
function b2() {
  var a2 = 1;
  c2();
}

function c2() {
  console.log(a2);
}

b2(); // вернёт 5
//---------

var arr = [];
for(let i = 0; i <= 4; i++) {
  arr.push(function() {
    console.log(i);
  })
}

console.log(arr);
arr[3](); // вернёт 5 в случае var i и 3 в случае let
//----------------------
//----------------------



