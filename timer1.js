const arr = process.argv.slice(2);
let onlyNumbers = arr.filter(Number)
let numbers = onlyNumbers.filter( x => x > -1 ); 

const timer = function (numbers) {
  for (const milliSecs of numbers) {
    let seconds = milliSecs * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds);
  }
};

timer(numbers)