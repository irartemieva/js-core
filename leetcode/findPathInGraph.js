/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let tmp = source;
  let start = 0;
  let end = edges.length - 1;
  while (start <= end) {

    if (edges[start].includes(tmp)) {
      tmp = edges[start].filter(value => value !== tmp)
      if (tmp.includes(destination)) {
        return true
      } else {
        tmp = tmp[0]
      }
    }
    start += 1;

  }
  return false
};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5))