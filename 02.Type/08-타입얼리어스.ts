// 07번 예제함수이며, 타입얼리어스 / 사용자 정의 타입으로 코드 단축하기
// type 키워드 사용
// 더 복잡한 타입 정의를 원하거나, 원하는 타입의 이름으로 인코딩가능
// 타입 선언시 어디서나 가져다 사용 가능하다

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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

// 객체 타입에도 적용 가능하다
// 적용 전
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
// 적용 후
type User = { name: string; age: number };

function greet2(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}
