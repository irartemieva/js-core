// Call method
var a = {
  lol: 'wut',
  kek: function() {
    console.log(this.lol);
  }
}

var fn = a.kek;
//fn.call({lol: 'sdf'});
//--------------------
//--------------------

// Var, let + bind
var a = 15;

function foo() {
  let a = 25;

  let result = function() {
    console.log(this.a);
  }

  result.a = 35;

  return result;
}

let bar = foo().bind({a: 45});
//bar();
//----------------------
//----------------------

// SetTimeout + call
function greetAgain() {
  console.log(`Hello ${this.name}`);

  setTimeout(() => {
    console.log(`Bye ${this.name}`);
  })
}

const user1 = {name: 'John'};
//greetAgain.call(user1);
//---------------------------
//---------------------------