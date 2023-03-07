const hobbies: string[] = ["Cooking", "Sports"];
const arr: string[] = ["blue", "red"];

let arr2: (string | number)[];
arr2 = ["black", 1];

for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
}
