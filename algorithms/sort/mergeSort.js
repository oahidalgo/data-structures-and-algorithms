const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0
//99, 44, 6, 2, 1, 5 - 63, 87, 283, 4, 0
//99, 44 --- 6, 2 --- 1, 5 --- 63, 87, --- 283, 4, --- 0

function mergeSort(array) {
  //Divide the arrays until the array.length >  1
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);
  //Continue dividing the sub arrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  //Compare left and right
  const combined = [];
  //Index
  let i = 0,
    j = 0;

  while (i < left?.length && j < right?.length) {
    if (left[i] < right[j]) {
      combined.push(left[i]);
      i++;
    } else {
      combined.push(right[j]);
      j++;
    }
  }

  while (i < left?.length) {
    combined.push(left[i]);
    i++;
  }

  while (j < right?.length) {
    combined.push(right[j]);
    j++;
  }
  return combined;
}

const answer = mergeSort(numbers);
console.log(answer);
