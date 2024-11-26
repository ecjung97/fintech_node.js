// hello.js 모듈 파일 생성

const hello = (name) => {
    console.log(`${name}님, 안녕하세요!`);
}; // 함수 표현식과 화살표 함수

module.exports = hello; // hello 상수 내보내기