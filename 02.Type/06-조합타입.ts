// 유니언 타입을 사용하여 한자리에 두가지 이상의 타입이 존재하게끔 만들어줌
// 종종 유니언 타입을 사용하면 런타임 검사를 사용할 때가 있다

function combine(input1: string | number, input2: string | number) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);
// 결과 값 56

const combinedNames = combine("성", "이름");
console.log(combinedNames);
// 결과 값 성이름
