/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
  let nums2 = [];
  
  nums2 = nums.splice(nums.length - k, k);
  nums = [...nums2, ...nums];

  console.log(nums);
  
};

var rotate2 = function(nums, k) {  
  while (k > 0) {
    nums.unshift(nums[nums.length - 1])
    nums.pop()
    k--
  }

  console.log(nums);
};


rotate([-1, -100, 3, 99], 2)
rotate([1, 2, 3, 4, 5, 6, 7], 3)