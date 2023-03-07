// Tuple Type = [1,2]
// 자바스크립트에는 존재하지 않으며 타입스크립트에서만 사용
// 배열과 동일하나 길이와 타입이 고정된 배열

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string, boolean]; // 튜플 타입 적용
} = {
  name: "jun",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author", true], // 선언한 타입에 맞게 순서도 맞아야 한다
};
