const fs = require("fs");

fs.readdir("./", (err, files) => {
/*  readdir()함수는 비동기식 방법으ㅗ 현재 경로의 파일목록을 읽어와서 배열로 반환.
    비동기식으로 읽어온 파일 목록 배열은 콜백함수에 정의된 매개변수 files에 저장되고, 못읽어와서 에러가 발생해도 콜백함수 err에서 처리한다.
 */

    if (err) { // 에러가 발생하면 실행
        console.error(err);
    }
    console.log(files);
});