// 타입을 매개변수로 할당하고 있는 함수에는 타입보다 중요한게 반환타입이다
// 반환타입도 명시하지 않아도 추론타입으로 정의
// 함수가 undefined를 비롯해 아무것도 반환하지 않는다면 void를 사용해야 한다
// void를 사용하는 의미는 함수에 의도적으로 반환문이 없다는 것을 의미하기 때문

function add(n1: number, n2: number): number {
  // 뒤 number 반환타입
  return n1 + n2;
}

// void라는 특수한 반환타입 예시
function printResult(num: number): void {
  // void 가아닌 undefined는 사용 불가능
  // 타입스크립트에서는 undefined도 타입중 하나이다
  // let someValue: undefined;
  console.log("Result: " + num);
}

printResult(add(5, 12));
console.log(printResult(add(5, 12))); // 아무것도 반환하지 않음 undefined출력

let combineValues: Function;
combineValues = add;
combineValues = printResult;
combineValues = 3;
console.log(combineValues(3, 3));
// 타입 Function을 선언하지 않는다면 any 타입으로 적용되어 25번째줄 또한 타입통과 된다
// 하지만 Function타입의 문제는 매개변수가 몇개 들어오는지 정확히 명시가 되어있지 않기에 add만 사용한다는 의미는없다
// 즉 조건을 보다 명확히 명시해야 한다
// ex)
let combineValues2: (n1: number, n2: number) => number; // 화살표 함수와 비슷하게 사용
combineValues2 = add;
combineValues2 = printResult; // 매개변수가 하나이기 때문에 에러발생
console.log(combineValues(3, 3));

// 함수의 콜백
function addAndHandle(
  n1: number,
  n2: number,
  callback: (number: number) => void
) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
}); // 익명함수까지 전달 , 출력값 30
