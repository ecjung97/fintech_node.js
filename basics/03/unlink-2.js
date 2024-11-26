/* unlinkSync()함수를 사용해서 동기식 방법으로 파일 삭제 */

const fs = require("fs");

if (!fs.existsSync("./text-1.txt")) {
    console.log(`./text-1.txt 파일이 잆어서 삭제 불가`);
}else {
    fs.unlinkSync("./text-1.txt");
    console.log(`text-1.txt 파일을 삭제함`);
}