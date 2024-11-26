const fs = require("fs");

fs.readFile("./example.txt", "UTF-8", (err, data) => {
    // readFile() 함수는 비동기식으로 주어진 경로 파일 내용을 읽어온다.
    if(err) {
        console.log(err);
    }

    console.log(data);
});