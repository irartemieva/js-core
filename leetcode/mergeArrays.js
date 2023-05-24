/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1 = nums1.filter(value => value !== 0);
    nums1 = nums1.concat(nums2);

    console.log(quick(nums1));

    console.log(nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);

//[1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

function quick(arr) {
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  if (arr.length <= 1) {
    return arr;
  }

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue
      }
      if (arr[i] < pivot) {
        less.push(arr[i])
      } else {
        greater.push(arr[i]);
      }
    }

    return [...quick(less), pivot, ...quick(greater)];
}