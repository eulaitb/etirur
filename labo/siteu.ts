// Define a tuple type that represents a structure with a string and a number
type StringAndNumberTuple = [string, number];

// Create a tuple with the string 'Hi' and the number 143
const strAndNum: StringAndNumberTuple = ["Hi", 143];

// Function to display the elements of the tuple
function displayTuple(tuple: StringAndNumberTuple): void {
  const [text, num] = tuple;
  console.log(`The string is: ${text}`);
  console.log(`The number is: ${num}`);
}

// Call the function to display the tuple elements
displayTuple(strAndNum);
