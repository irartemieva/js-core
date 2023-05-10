//----------------------------------------
//бинарный поиск
function binarySearch(arr, element) {
  let low = 0;
  let high = arr.length - 1;
  let middle;
  let iteration = 0;

  while (low <= high) {
    iteration++;
    middle = Math.floor((low + high) / 2);
    if (arr[middle] === element) {
      return iteration;
    } else if (arr[middle] < element) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

}

//console.log(binarySearch([1, 3, 45, 67, 100, 123], 100));
//--------------------------------------------
// Сортировка выбором
function findMinValue(arr) {
  let minValue = arr[0];
  let minIndex = 0;

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

function sortArray(arr) {
  let sortedArray = [];
  let smallest;
  let copyArr = [...arr];

  for(let i = 0; i < arr.length; i++) {
    smallest = copyArr.splice(findMinValue(copyArr), 1);
    sortedArray.push(...smallest);
  }
  return sortedArray;
}

//console.log(sortArray([45, 23, 123, 3, 12, 10]));
//--------------------------------------------
// Рекурсия - сумма
function sum(arr) {
  let copiedArr = [...arr];

  if(copiedArr.length === 0) {
    return 0;
  } else {
    return copiedArr[0] + sum(copiedArr.slice(1));
  }
}

//console.log(sum([2, 3, 6, 8]));
//--------------------------------------------
// Рекурсия - подсчёт элементов в списке
function countOfElements(arr) {
  let count = 0;
  let copiedArr = [...arr];

  if (copiedArr.length === 0) {
    return 0;
  } else {
    count++;
    count +=countOfElements(copiedArr.slice(1))
    return count;
  }
}

//console.log(countOfElements([2, 3, 4, 5, 9, 8]));
//--------------------------------------------
// Рекурсия - наибольшее число в списке
function findMaxValue(arr) {
  let maxValue;
  let copiedArr = [...arr];

  if(arr.length === 2) {
    if(arr[0] > arr[1]) {
      return arr[0];
    } else {
      return arr[1];
    }
  } else {
    maxValue = findMaxValue(arr.slice(1));
    if(arr[0] > maxValue) {
      return arr[0];
    } else {
      return maxValue;
    }
  }
}
//console.log(findMaxValue([200, 3, 41]));
//--------------------------------------------
// Быстрая сортировка
function quickSort(arr) {
  let pivot;
  let pivotIndex;
  let less = [];
  let greater = [];

  if(arr.length < 2) {
    return arr;
  }
  pivotIndex = Math.floor(arr.length / 2);
  pivot = arr[pivotIndex];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if(arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort([12, 45, 3, 24, 2, 4, 1]));