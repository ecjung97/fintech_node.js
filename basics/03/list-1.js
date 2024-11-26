const fs = require("fs"); // 파일시스템 모듈을 읽어들임.

let files = fs.readdirSync("./"); // 동기식 방법(Sync)으로 현재 경로(./)에 있는 파일 목록을 배열로 반환
console.log(files);