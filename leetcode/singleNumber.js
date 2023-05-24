/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let resultObj = {}
  let result = 0;
    
  for (let item of nums) {
      resultObj[item] = resultObj[item] ? resultObj[item] + 1 : 1
  }

  Object.keys(resultObj).forEach(value => {
    //resultObj[value] === 1
    if (resultObj[value] === 1) {
      result = +value;
    }
  })

  return result;
};

//console.log(singleNumber([2, 3, 3, 2, 1]))
console.log(singleNumber([1,2,4,1,2]))