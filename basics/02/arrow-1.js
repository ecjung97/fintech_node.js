// ES6에서 추가된 화살표 함수
let hi = () => {
    return `안녕하세요!`;
} // 명령어가 한줄이기 때문에 {}와 return 생략가능함

console.log(hi());

const hi2 = () => `잘가세요`; // {}와 return이 생략됨.

console.log(hi2());