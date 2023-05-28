/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let returnedValue = false;
    
  nums.forEach((value, index, numbers) => {
      if (numbers.indexOf(value) !== index) {
          returnedValue = true
      }
  })
  
  return returnedValue
  
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))