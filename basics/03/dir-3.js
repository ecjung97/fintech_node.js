/* rmdir()함수는 비동기식으로 비어있는 디렉토리를 삭제 */

const fs = require("fs");

if (fs.existsSync("./test")) {
    fs.rmdir("./test", (err) => {
        if(err) {
            console.log(err);
        }else {
            console.log(`folder deleted`);
        }
    });
}else {
    console.log(`folder does not exist`);
}