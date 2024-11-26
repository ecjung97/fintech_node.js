// 버퍼에 저장된 이진데이터 읽기와 이진데이터를 문자열로 변환해서 출력

const fs = require("fs");

fs.readFile("example.txt", (err, data) => {
    /*  비동기식으로 example.txt 파일을 읽어서 data 매개변수에 저장하는데 readFile 함수를 사용해서 example.txt 파일을 읽어오면 터미널에
        <Buffer...>라고 되어 있고 그 내용이 이진 데이터로 표시된다. */
    if (err) {
        console.log(err);
    }else {
        console.log(data); // data에 저장된 값을 읽어와 버퍼에 임시 저장한 다음 이진데이터로 출력
        console.log("\n ========================> \n");
        console.log(data.toString()); // toString()메서드로 문자열로 변환해서 출력
    }
});