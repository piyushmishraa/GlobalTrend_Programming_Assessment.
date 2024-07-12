
//solution #1
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("%cFizzBuzz", "color: purple");
    } else if (i % 3 === 0) {
      console.log("%cFizz", "color: orange");
    } else if (i % 5 === 0) {
      console.log("%cBuzz", "color: blue");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();


//solution #2

function evaluateExpression(expression) {
  // Remove any whitespace from the expression
  expression = expression.replace(/\s+/g, '');

  let result = 0;
  let currentNumber = '';
  let currentSign = 1; // 1 for positive, -1 for negative

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      // If the character is a digit, add it to the current number
      currentNumber += char;
    } else if (char === '+' || char === '-') {
      // When encountering a sign, add the current number to the result
      // with the current sign, then reset the current number and update the sign
      result += currentSign * parseInt(currentNumber);
      currentNumber = '';
      currentSign = char === '+' ? 1 : -1;
    }
  }

  // Add the last number in the expression to the result
  if (currentNumber !== '') {
    result += currentSign * parseInt(currentNumber);
  }

  return result;
}

// Example usage:
const expression = "10 + 20 - 5";
const result = evaluateExpression(expression);
console.log(`The result of the expression "${expression}" is: ${result}`);


//solution #3
function flattenArray(arr) {
  // Using Array.prototype.reduce() to flatten the array
  return arr.reduce(function(flat, toFlatten) {
    // Concatenate the current element to the flattened array if it's an array
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);

//soln4

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase for consistency
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths are different, if so, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Compare sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('hello', 'world'));   // Output: false
console.log(areAnagrams('Astronomer', 'Moon starer')); // Output: true (case insensitive and considering spaces)

//soln5

function removeDuplicates(arr) {
  // Create a Set from the array to remove duplicates
  const uniqueArray = [...new Set(arr)];
  
  // Return the array converted back from Set to maintain order (if order matters)
  return uniqueArray;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); 


//soln6 6
function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');
  
  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Join the capitalized words back into a single string
  return capitalizedWords.join(' ');
}

// Example usage:
const sentence = "hello world";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);


//soln_7

function generateFibonacci(n) {
  // Edge case for n = 0
  if (n <= 0) {
    return [];
  }
  
  // Initialize the Fibonacci sequence array
  let fibonacciSequence = [0, 1];
  
  // Generate Fibonacci numbers
  for (let i = 2; i < n; i++) {
    let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextFibonacci);
  }
  
  return fibonacciSequence;
}

// Example usage:
const n = 10;
const fibonacciNumbers = generateFibonacci(n);
console.log(fibonacciNumbers); 


//soln8
class HashMap {
  constructor() {
    this.map = {}; // Object to store key-value pairs
  }

  // Method to insert or update a key-value pair
  put(key, value) {
    this.map[key] = value;
  }

  // Method to get the value associated with a key
  get(key) {
    return this.map[key];
  }

  // Method to remove a key-value pair
  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    }
  }
}

// Example usage:
const myHashMap = new HashMap();

// Inserting key-value pairs
myHashMap.put('apple', 5);
myHashMap.put('banana', 10);

// Getting values
console.log(myHashMap.get('apple')); 
console.log(myHashMap.get('banana')); 

// Removing a key-value pair
myHashMap.remove('apple');

// After removal
console.log(myHashMap.get('apple')); 


function filterOutEvenNumbers(arr) {
 
  return arr.filter(num => num % 2 !== 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOutEvenNumbers(numbers);
console.log(oddNumbers);

function toTitleCase(str) {
  // Split the string into words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back into a single string
  return titleCaseWords.join(' ');
}

// Example usage:
const string = "hello world";
const titleCaseSentence = toTitleCase(string);
console.log(titleCaseSentence);