// 리터럴타입은 단순한 특정 변수나 매개변수가 아니며,
// 숫자나 문자열도 아닌 정확한 값을 가지는 타입

// 06번 예제를 가져와 리터럴 타입 적용

function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: "as-number" | "as-text" // 유니언타입과 리터럴타입 조합하여 적용
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
// 결과 값 56

const combinedStringAges = combine("성", "이름", "as-number");
console.log(combinedStringAges);
// 결과 값 56

const combinedNames = combine("성", "이름", "as-text");
console.log(combinedNames);
// 결과 값 성이름
