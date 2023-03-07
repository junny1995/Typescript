// any 타입과는 다른 unknown 타입이 있다
// 사용자가 무엇을 입력할지 알 수 없기 때문에 unknown이다
// 에러없이 어떤 값이든 저장할 수 있다

let userinput: unknown;
let userName: string;
userinput = "5";
userinput = 5;

userName = userinput; // 에러발생
// unknown을 사용하는 경우 userinput에 현재 저장된 타입을 확인해야 문자열을 원하는 변수에 할당 가능
if (typeof userinput === "string") {
  userName = userinput;
}
// 이처럼 unknown타입은 추가적인 검사가 필요하며 any 타입과는 전혀 다르다
