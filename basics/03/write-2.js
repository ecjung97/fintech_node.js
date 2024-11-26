const fs = require("fs");

const data = fs.readFileSync("./example.txt", "UTF-8"); /* readFileSync() 함수는 동기식으로 example.txt
파일을 UTF-8타입 언어코딩 타입으로 읽어옴. */

if (fs.existsSync("text-1.txt")) {
    // text-1.txt 파일이 있다면 참
    console.log(`동일 파일이 존재합니다.`);
}else {
    fs.writeFileSync("text-1.txt", data); // 동기식으로 주어진 파일이 없다면 만들면서 data 상수 내용을 기록함.
}