// 비동기식으로 주어진 파일에 writeFile()함수로 기록하기

const fs = require("fs");

fs.readFile("./example.txt", "UTF-8", (error, data) => {

    if (error) {
        console.log(error);
    }

    fs.writeFile("./text-2.txt", data, (error) => {
        /*  writeFile()함수로 비동기식으로 주어진 파일에(주어진 파일이 없다면 만들어서) data변수 내용을 기록한다.
            기록 후 콜백함수를 호출한다. 에러가 나면 error매개변수에 에러 내용이 저장됨.
         */
        if (error) {
            console.log(error);
        }
        console.log(`text-2.txt 파일에 기록했다.`);
    });
});