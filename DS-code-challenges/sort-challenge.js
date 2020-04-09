//Implement Selection Sort
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let item = array[i];
        array[i] = array[j];
        array[j] = item;
      }
    }
  }
  return array;
}

console.log(selectionSort([1, 8, 2, 4, 5]));
