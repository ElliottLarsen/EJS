async function exampleAsyncFunction() {
    console.log('Before await');
  
    // Non-blocking operation with await
    const result = await someAsyncOperation();
  
    // This line is reached only after someAsyncOperation is settled
    console.log('After await, Result:', result);
  }
  
function someAsyncOperation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Operation succeeded!');
      }, 1000);
    });
}
  
  // Calling the async function
exampleAsyncFunction();
console.log("This is the second line!");  