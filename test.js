// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    return a / b;
  }
  
  // Function to perform the calculation based on operator
  function calculate(a, operator, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return 'Invalid operator';
    }
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 5;
  const operator = '+';
  
  const result = calculate(num1, operator, num2);
  console.log(`Result of ${num1} ${operator} ${num2} is: ${result}`);
  