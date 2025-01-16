const { isTemplateLiteral } = require('typescript');

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  //Code Here
  //By comparing look for the smallest number and place it
  //In the first position
  for (let i = 0; i < numbers.length - 1; i++) {
    let smallest,
      temp = 0;
    //Initial value of j depends on the position we completed
    for (let j = i; j < numbers.length - 1; j++) {
      //Taking the first element if undefined
      if (!smallest) {
        smallest = j;
        //If next position is slower, a new smallest number was found
      }

      if (array[j + 1] < array[smallest]) {
        smallest = j + 1;
      }
    }
    //Switching positions of smaller no. and the number in pos[i]
    temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
