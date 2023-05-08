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

console.log(sortArray([45, 23, 123, 3, 12, 10]));
//--------------------------------------------
// 