function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const numbers = [2, 4, 6, 8];

function callback(element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
}

forEachCustom(numbers, callback);
