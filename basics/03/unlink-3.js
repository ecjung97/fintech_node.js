/* unlink() 함수는 비동기식 처리로 파일 삭제 */

const  fs = require("fs");

if (!fs.existsSync("text-2.txt")) {
    console.log('file does not exist!');
}else {
    fs.unlink("text-2.txt", () => {
        console.log("file deleted");
    });
}
