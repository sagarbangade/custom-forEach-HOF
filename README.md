# custom-foreach-hof

This repository contains a custom implementation of the `forEach()` method in JavaScript, showcasing how to create a higher-order function. The custom function, `forEachCustom()`, behaves similarly to JavaScript's native `forEach()` and demonstrates how to iterate over arrays while applying a callback function to each element.

## File
- **forEachCustom.js**: Contains the code for the custom `forEach()` function implementation.

## How `forEachCustom()` Works

The `forEachCustom()` function accepts two arguments:
1. **`arr`**: The array to be iterated over.
2. **`callback`**: A callback function that will be executed on each element of the array. This callback receives three arguments:
   - The current element
   - The index of the current element
   - The entire array

### Function Definition Example

```javascript
function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
```

### Example Usage

```javascript
// Sample array
const numbers = [2, 4, 6, 8];

// Callback function to log each element
function logElement(element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
}

// Using the custom forEachCustom function
forEachCustom(numbers, logElement);

// Output:
// Element: 2, Index: 0, Array: [2,4,6,8]
// Element: 4, Index: 1, Array: [2,4,6,8]
// Element: 6, Index: 2, Array: [2,4,6,8]
// Element: 8, Index: 3, Array: [2,4,6,8]
```

## How to Use

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sagarbangade/custom-forEach-HOF.git
   ```

2. Navigate into the project directory:

   ```bash
   cd custom-forEach-HOF
   ```

3. Open the `forEachCustom.js` file in your preferred text editor to explore and test the implementation.

4. Run the `forEachCustom.js` file using Node.js to see the function in action:

   ```bash
   node forEachCustom.js
   ```

## License

This project is open-source and available under the [MIT License](LICENSE).
