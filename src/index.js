/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var countOfTriangles = 0;
  if (Array.isArray(preferences) && preferences.length) {
    preferences.forEach(function (element, index, array) {
      lastIndex = searchTriangle(element, array)
      if (lastIndex == index) {
        countOfTriangles += 1;
        cleanFoundTriangleValues(index, array);
      }
    });
  }
  return countOfTriangles;
};

function searchTriangle(nextIndex, array, currentDepth = 1, maxDepth = 3) {
  if (nextIndex == null || nextIndex < 0 || array.length < nextIndex
    || nextIndex == array[nextIndex - 1])
    return -1;
  if (currentDepth == maxDepth)
    return nextIndex - 1;
  return searchTriangle(array[nextIndex - 1], array, currentDepth + 1);
}

function cleanFoundTriangleValues(first, array, maxDepth = 3) {
  var index = first;
  for (i = 0; i < maxDepth; i++) {
    nextIndex = array[index] - 1;
    array[index] = null;
    index = nextIndex;
  }
}
