function binarySearch(array, searchedElement) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    const guessElement = array[middleIndex];

    if (guessElement === searchedElement) return middleIndex;
    if (guessElement > searchedElement) lastIndex = middleIndex - 1;
    if (guessElement < searchedElement) firstIndex = middleIndex + 1;
  }

  return null;
}

function recursiveBinarySearch(array, searchedElement, firstIndex, lastIndex) {
  firstIndex = firstIndex || 0;
  lastIndex = lastIndex || array.length - 1;

  if (firstIndex > lastIndex) return null;

  const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  const guessElement = array[middleIndex];

  if (guessElement === searchedElement) return middleIndex;
  if (guessElement > searchedElement) lastIndex = middleIndex - 1;
  if (guessElement < searchedElement) firstIndex = middleIndex + 1;

  return recursiveBinarySearch(array, searchedElement, firstIndex, lastIndex);
}

const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchedElement = 9;

const searchedElementIndex = binarySearch(inputArray, searchedElement);
const searchedElementIndexByRecursion = binarySearch(inputArray, searchedElement);

console.log(searchedElementIndex);
console.log(searchedElementIndexByRecursion);
