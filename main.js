let evaluate = stringArr => {
  let mainOperator = stringArr.shift(); // rule always first operand is the main operand
  let currentOperator = mainOperator;
  let partialCalculation = [];
  let mainCalculation = [];

  while (stringArr.length != 0) {
    if (isNumeric(stringArr[0])) {
      partialCalculation.unshift(parseInt(stringArr[0])); // 3,2,1
      stringArr.shift();
    } else {
      // operand changed

      // this control is for the array which starts with 2 operans ['+', '*', ...]
      if (partialCalculation.length != 0) {
        let mainCalculationElem = calculateTempResult(
          partialCalculation,
          currentOperator
        );
        mainCalculation.unshift(mainCalculationElem);
      }
      currentOperator = stringArr[0];
      stringArr.shift();
    }
  }

  if (partialCalculation.length != 0) {
    let lastResult = calculateTempResult(partialCalculation, currentOperator);
    mainCalculation.unshift(lastResult);
    return calculateTempResult(mainCalculation, mainOperator);
  }
};

//calculates the result for a given array and operand
let calculateTempResult = (queueArr, operand) => {
  let storage = queueArr.pop();

  if (queueArr.length == 0) return storage;

  while (queueArr.length != 0) {
    if (operand == "+") storage += queueArr.pop();

    if (operand == "-") storage -= queueArr.pop();

    if (operand == "/") storage /= queueArr.pop();

    if (operand == "*") storage *= queueArr.pop();
  }
  //console.log("returning storage", storage);
  return storage;
};

let isNumeric = num => {
  if (!isNaN(num)) {
    return true;
  } else {
    return false;
  }
};

console.log(`["*", "2", "5", "3"] = `, evaluate(["*", "2", "5", "3"])); // 2 * 5 * 3 = 30
console.log(`["-", "2", "-5", "3"] = `, evaluate(["-", "2", "-5", "3"])); // 2 - (-5) - 3 = 4
console.log(`["/", "10", "2", "1"] = `, evaluate(["/", "10", "2", "1"])); // 10 / 2 / 1 = 5
console.log(`["+", "9", "8", "7"] = `, evaluate(["+", "9", "8", "7"])); //9 + 8 + 7 = 24

//multiple calculations
console.log(
  `["+", "5", "2", "4", "*", "5", "4", "-", "10", "4", "/", "50", "10"] =`,
  evaluate(["+", "5", "2", "4", "*", "5", "4", "-", "10", "4", "/", "50", "10"])
); // (5 + 2 + 4) + (5 * 4) + (10 - 4) + (50 / 10) = 42

//
console.log(
  `["+", "-", "5", "2", "4", "*", "5", "4", "-", "10", "4", "/", "50", "10"] =`,
  evaluate(["+", "-","5", "2", "4", "*", "5", "4", "-", "10", "4", "/", "50", "10"])
); // (5 - 2 - 4) + (5 * 4) + (10 - 4) + (50 / 10) = 30
