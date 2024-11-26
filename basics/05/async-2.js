/* 콜백 함수를 사용한 비동기 처리 */

const fs = require('node:fs'); // 파일시스템 모듈 fs를 import

let files = fs.readdir("./",(err, files) => {
    /*  비동기식으로 현재 경로(./)의 파일 목록을 읽어와서 배열로 반환, 읽기 작업이 완료되면 콜백함수가 실행되고, 파일목록을 files배열에 전달.
        비동기식으로 현재 경로 파일 목록을 읽어오는 시간이 걸리는 작업은 일단 나중에 실행. */

    if (err) {
        console.log(err);
    }

    console.log(files);
});

console.log("Code is done"); // 먼저 실행