function reverseString(str) {
  const strArray = str.split('');
  let reversed = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    reversed.push(strArray[i]);
  }
  return reversed.join('');
}

//console.log(reverseString('yoyo master'));

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else {
    console.log(str.charAt(0));
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');
