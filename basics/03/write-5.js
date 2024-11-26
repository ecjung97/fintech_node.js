/* appendFile() 함수는 비동기식으로 기존 내용을 유지한 채 새로운 내용을 추가 */

const fs = require("fs");

fs.appendFile("./text-2.txt","\n\n 새로운 내용을 추가합니다.", (error) => {
    if (error) {
        console.log(error);
    }

    console.log(`기존 파일에 내용을 추가했다.`);
});