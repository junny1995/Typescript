// 타입스크립트의 주요 원시 타입은 모두 소문자로 사용

// number
function add(num1: number, num2: number) {
  return num1 + num2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// string
function add2(str1: string, str2: string) {
  return str1 + str2;
}

const string1 = "안";
const string2 = "녕";

const result2 = add2(string1, string2);
console.log(result2);

// boolean
function check(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const checknum1 = 5;
const checknum2 = 2.7;
const printResult = true;
const reslutPhrase = "Result is : ";

check(checknum1, checknum2, printResult, reslutPhrase);
