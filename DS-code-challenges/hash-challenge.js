function uniqueOcc(arr) {
  let obj1 = {};
  let obj2 = {};
  for (char of arr) {
    if (!obj1[char]) {
      obj1[char] = 1;
    } else obj1[char]++;
  }
  let array = Object.values(obj1);
  for (char of array) {
    if (!obj2[char]) obj2[char] = 1;
    else obj2[char]++;
  }
  for (char in obj2) {
    if (obj2[char] !== 1) return false;
  }
  return true;
}

const array1 = [1, 2, 2, 1, 1, 3];
const array2 = [1, 2];
const array3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

console.log(uniqueOcc(array1)); //true
console.log(uniqueOcc(array2)); //false
console.log(uniqueOcc(array3)); //true
