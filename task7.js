let arr = [1, 0, null, 4, 5, 6, 7, 8, 9, 10, "hello world!", NaN];
let odd = 0;
let even = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      console.log(arr[i] + " - нуль");
    } else if (arr[i] % 2 === 0) {
      console.log(arr[i] + " - четное число");
      even += 1;
    } else if (arr[i] % 2 !== 0) {
      console.log(arr[i] + " - нечетное число");
      odd += 1;
    }
  } else {
    console.log(arr[i] + " - тип значения - не число");
  }
}

console.log("в массиве содержится ${odd} нечётных числа и ${even} четных");
