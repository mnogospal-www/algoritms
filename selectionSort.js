function selectionSort(_array) {
  const sortedArray = [];
  const array = [..._array];

  while (array.length > 0) {
    const [smallestElement, smallestElementIndex] = findSmallestElement(array);
    sortedArray.push(smallestElement);
    array.splice(smallestElementIndex, 1);
  }

  return sortedArray;
}

function findSmallestElement(array) {
  let smallestElementIndex = 0;
  let smallestElement = array[0];

  array.forEach((value, i) => {
    if (value < smallestElement) {
      smallestElement = value;
      smallestElementIndex = i;
    }
  });

  return [smallestElement, smallestElementIndex];
}

const unsortedArray = [0, 10, -1, 6, 1, 1, 23, 5, -12];
const sortedArray = selectionSort(unsortedArray);

console.log(sortedArray);
