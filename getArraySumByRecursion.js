function getArraySumByRecursion(array) {
  if (array.length === 0) return 0;
  else return array[0] + getArraySumByRecursion(array.slice(1));
}

const inputArray = [-1, 2, 3];
const inputArraySum = getArraySumByRecursion(inputArray);

console.log(inputArraySum);
