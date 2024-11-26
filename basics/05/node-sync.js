// node.js에서 동기 처리 예

const fs = require("fs");

let files = fs.readdirSync("./"); // readdirSync()함수는 동기식으로 현재경로의 파일목록을 배열로 반환

console.log(files);

console.log("Code is done"); // 동기식이다 보니 차례대로 마지막에 실행