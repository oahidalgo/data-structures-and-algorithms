const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  //Code here
  let length = array.length;
  for (let i = 0; i < array.length; i++) {
    //Finish the comparison on last element (length-1)
    //It doesn't have another element to be compare with
    for (let j = 0; j < length - 1; j++) {
      //if previous pos > next pos, swap values
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    //Reduce the length to be evaluated
    //Cause the bigger element was moved to the end
    length--;
  }
}

bubbleSort(numbers);
console.log(numbers);
