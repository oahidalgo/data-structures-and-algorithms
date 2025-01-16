const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  //Code Here
  let temp;
  //It's going to start on pos 1
  for (let i = 1; i < array.length; i++) {
    //To compare the element i with all the previous
    for (let j = i; j > 0; j--) {
      //if current pos is < previous pos, swap
      if (array[j] < array[j - 1]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        //If current pos > previous pos, keep the value in same pos
        //And it supossed to be ordered, so it doesnt make sense to keep comparing
      } else if (array[j] > array[j - 1]) {
        break;
      }
    }
  }
  return array;
}

console.log(insertionSort(numbers));
