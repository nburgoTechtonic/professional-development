function productFib(prod){
  let lastNumber = 1;
  let currentNumber = 1;
  while ((lastNumber * currentNumber) < prod) {
    const nextNumber = lastNumber + currentNumber;
    lastNumber = currentNumber;
    currentNumber = nextNumber;
  }
  
  return [lastNumber, currentNumber, lastNumber * currentNumber === prod];
}