// You have a non-negative number. Try to find out how many digits it has.
//--------------------
function numberLength(value: number): number {
  // your code here
  return value.toString().split('').length;
}

// console.log("Example:");
// console.log(numberLength(44));
//--------------------
//--------------------
// In this mission, you need to create a password verification function.
// The verification condition is:
// the length should be bigger than 6.
//--------------------
function isAcceptablePassword(password: string): boolean {
  // your code here
  return password.length > 6;
}

// console.log("Example:");
// console.log(isAcceptablePassword("shortss"));
//--------------------
//--------------------
// Check if a given string has all symbols in upper case. 
// If the string is empty or doesn't have any letter in it - function should return True.
function isAllUpper(text: string): boolean {
  // your code here
  return text === text.toUpperCase();
}

// console.log("Example:");
// console.log(isAllUpper(" "));
//--------------------
//--------------------
// You are given a string and you have to find its first word.
function firstWord(text: string): string {
  // your code here
  return text.split(' ')[0];
}

// console.log("Example:");
// console.log(firstWord("Hello world"));
//--------------------
//--------------------
// In this mission you need to create a password verification function.
// The verification conditions are:
// the length should be bigger than 6;
// should contain at least one digit.
function isAcceptablePassword2(password: string): boolean {
  // your code here
  return password.length > 6 && /\d/.test(password);
}

//console.log("Example:");
//console.log(isAcceptablePassword2("muchlonger5"));
//--------------------
//--------------------
// In this mission you need to create a password verification function.
// The verification conditions are:
// the length should be bigger than 6;
// should contain at least one digit, but cannot consist of just digits.
function isAcceptablePassword3(password: string): boolean {
  // your code here
  return password.length > 6 && /\d/.test(password) && /[A-Za-z]/.test(password);
}


// console.log("Example:");
// console.log(isAcceptablePassword3("1234567"));
//--------------------
//--------------------
// For the input of your function, you will be given one sentence. 
// You have to return a corrected version, that starts 
// with a capital letter and ends with a period (dot).
function correctSentence(text: string): string {
  // your code here
  let arrOfStr = text.split('');

  if (!/^[A-Z]/.test(text)) {
    arrOfStr[0] = text.split('')[0].toUpperCase();
  }

  if(!/\.$/.test(text)) {
    arrOfStr[arrOfStr.length] = '.';
  }

  return arrOfStr.join('');
}

//console.log("Example:");
//console.log(correctSentence("Greetings, friends"));
//--------------------
//--------------------
// You should return a given string in reverse order.
function backwardString(value: string): string {
  // your code here
  return value.split('').reverse().join('');
}

//console.log("Example:");
//console.log(backwardString("123456789"));
//--------------------
//--------------------
// You are given a positive integer. 
// Your function should calculate the product of the digits excluding any zeroes.
function digitsMultip(data: number): number {
  // your code here
  let arrOfDigits = data.toString().split('').filter(elem => elem !== '0');
  let multiple = 1;
  arrOfDigits.forEach(elem => {
    multiple *= +elem;
  })
  return multiple;
}

//console.log("Example:");
//console.log(digitsMultip(1111));
//--------------------
//--------------------
// In this mission you need to create a password verification function.
// The verification conditions are:
// - the length should be bigger than 6;
// - should contain at least one digit, but it cannot consist of just digits;
// - if the password is longer than 9 - previous rule (about one digit), is not required.
function isAcceptablePassword4(password: string): boolean {
  // your code here
  const pswdLength = password.length > 6;
  const pswdNumbers = /\d/.test(password);
  const pswdLetters = /[A-Za-z]/.test(password);

  if(password.length > 9) {
    return pswdLength;
  } else {
    return pswdLength && pswdNumbers && pswdLetters;
  }
}

//console.log("Example:");
//console.log(isAcceptablePassword4("12345678910"));
//--------------------
//--------------------
// In this mission you need to create a password verification function.
// The verification conditions are:
// the length should be bigger than 6;
// should contain at least one digit, but it cannot consist of just digits;
// having numbers or containing just numbers does not apply to the password longer than 9;
// a string should not contain the word "password" in any case.
function isAcceptablePassword5(password: string): boolean {
  // your code here
  const pswdLength = password.length > 6;
  const pswdNumbers = /\d/.test(password);
  const pswdLetters = /[A-Za-z]/.test(password);

  if(password.toLocaleLowerCase().indexOf('password') !== -1) return !password;

  if(password.length > 9) {
    return pswdLength;
  } else {
    return pswdLength && pswdNumbers && pswdLetters;
  }
}

// console.log("Example:");
// console.log(isAcceptablePassword5("passwo12345"));
//--------------------
//--------------------
// In this mission you need to create a password verification function.
// The verification conditions are:
// - the length should be bigger than 6;
// - should contain at least one digit, but it cannot consist of just digits;
// - having numbers or containing just numbers does not apply to the password longer than 9.
// - a string should not contain the word "password" in any case;
// - should contain at least 3 different letters (or digits) even if it is longer than 10
function isAcceptablePassword6(password: string): boolean {
  // your code here
  const pswdLength = password.length > 6;
  const pswdNumbers = /\d/.test(password);
  const pswdLetters = /[A-Za-z]/.test(password);
  
  if(password.toLocaleLowerCase().indexOf('password') !== -1) return !password;

  if(password.length > 10) {
    let mapPwd = new Map();
    let count;

    for(let i = 0; i < password.length; i++) {
      count = 1;
      if (mapPwd.get(password[i]) !== undefined) {
        count += mapPwd!.get(password[i]);
        mapPwd.set(password[i], count);
      } else {
        mapPwd.set(password[i], count);
      }
    }
    return mapPwd.size >= 3;
  }
  
  if(password.length > 9) {
    return pswdLength;
  } else {
    console.log('1');
    return pswdLength && pswdNumbers && pswdLetters;
  }
}

// console.log("Example:");
// console.log(isAcceptablePassword6("aaaaaa1"));
//--------------------
//--------------------
// Sort the numbers in an Array. But the position of zeros should not be changed.
function exceptZero(items: number[]): number[] {
  // your code here
  let newArr: Array<number> = [];
  let smallest;
  let copiedArr: Array<number> = [...items];

  for(let i = 0; i < items.length; i++) {
    if(items[i] === 0) {
      smallest = copiedArr.indexOf(0);
    } else {
      smallest = findMinIndex(copiedArr);
    }
    newArr.push(...copiedArr.splice(smallest, 1));
  }
  return newArr;
}

function findMinIndex(items: number[]): number {
  let minValue = items.find(elem => elem !== 0);
  let minIndex = 0;

  for(let i = 1; i < items.length; i++) {
    if (minValue && items[i] < minValue && !!items[i]) {
      minValue = items[i];
      minIndex = i;
    }
  }
  return minIndex;
}

//console.log("Example:");
//console.log(findMinIndex([0, 5, 3, 0, 4, 1, 4, 0, 7]));
//console.log(JSON.stringify(exceptZero([4, 5, 3, 1, 1])));
//--------------------
//--------------------
//