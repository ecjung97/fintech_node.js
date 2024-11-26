// node.js에서 프라미스로 비동기식 처리

const fs = require('fs').promises; // FS모듈에 있는 프라미스 반환 함수를 사용함

fs.readdir('./') // 현재 경로의 파일목록을 비동기적으로 읽어옴. 읽어온 목록은 배열로 반환
    .then((result) => console.log(result)) // 읽어오는 것이 성공 시 연결 호출되어서 실행
    .catch((err) => console.error(err)); // 실패 시 연결