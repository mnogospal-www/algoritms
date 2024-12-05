function getArrayMaxValueByRecursion(array) {
  if (array.length === 0) return -Infinity;
  if (array.length === 1) return array[0];

  const maxOfRest = getArrayMaxValueByRecursion(array.slice(1));

  return array[0] > maxOfRest ? array[0] : maxOfRest;
}

const inputArray = [1, 2, 3, 4, 5];
const maxValue = getArrayMaxValueByRecursion(inputArray);

console.log(maxValue);
