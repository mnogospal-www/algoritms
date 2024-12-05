function quickSort(array) {
  if (array < 2) return array;

  const pivot = array[0];

  const less = [];
  const equal = [];
  const greater = [];

  array.forEach((value) => {
    if (value === pivot) equal.push(value);
    if (value > pivot) greater.push(value);
    if (value < pivot) less.push(value);
  });

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const unsortedArray = [0, 10, -1, 6, 1, 1, 23, 5, -12];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);
