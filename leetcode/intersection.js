var intersect = function(nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && nums1[i] !== 0) {
        result.push(nums1[i]);
        nums1.splice(i, 1, 0);
        nums2.splice(j, 1, 0);
      }
    }
  }

  //result = nums1.filter(x => nums2.includes(x))
  return result;
};


console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2, 2, 1], [2, 2]))