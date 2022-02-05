const testData = [1, 2, 3, 4];

function sumFor(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumFor(testData));

function sumWhile(numbers) {
  let result = 0;
  let i = 0;
  while (i < numbers.length) {
    result += numbers[i];
    i++;
  }
  return result;
}

console.log(sumWhile(testData));

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
console.log(sumRecursion(testData));

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (num1, num2) => num1 + num2, 0);
}

console.log(sumTheSimpleWay(testData));
