const fs = require("fs");

const data = fs.readFileSync("./example.txt", "UTF-8");
// readFileSync()함수는 주어진 경로 파일을 동기식으로 읽어온다. 언어코딩 타입을 UTF8fh wlwjdgka

console.log(`동기식으로 읽어온 example.txt 파일 내용 = ${data}`);