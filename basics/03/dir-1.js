/* 비동기식으로 mkdir()함수로 디렉토리 생성 */

const fs = require("fs");

if (fs.existsSync("./test")) {
    console.log("test folder already exists");
}else {
    fs.mkdir("./test", (err) => {
        if (err) {
            console.log(err);
        }

        console.log("test folder created");
    });
}