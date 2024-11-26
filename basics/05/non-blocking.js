// non-blocking I/O => 비동기식 처리 예제

const fs = require('fs');

const data = fs.readFile("example.txt", 'utf8', (err, data) => {
    /*  주어진 파일 내용을 비동기적으로 읽어오는 기능을 수행. 이 함수를 사용하면 파일을 읽어오는 동안 프로그램이 다른 작업을 수행할 수 있으며,
        파일 읽기가 끝나면 콜백함수를 통해 결과를 나중에 처리한다. */
    if (err) {
        console.error(err);
    }

    console.log(data);
});

console.log("코드 끝"); // 파일 읽기 전에 먼저 실행