// 자바스크립트에는 없는 타입으로 특정 식별자와 전역 상수를 갖는 타입
// 식별자들을 중괄호 쌍 안에 넣는 방식으로 열거 목록을 제공한다
// if 검사에 활용하거나 타입 배정에 활용해도 좋다
// 인간이 읽을 수 있고 백그라운드에서 매핑된 값이 있는 식별자가 필요할때 사용한다

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// 숫자, 텍스트를 할당할 수도 있고 혼합도 가능하다
// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = 100,
//   AUTHOR = 200,
// }

const person3 = {
  name: "jun",
  age: 20,
  hobbies: ["hobbies"],
  role: Role.ADMIN,
};
