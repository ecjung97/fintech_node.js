// http 모듈로 서버 만들고 실행하기
const http = require("http"); // http 모듈을 가져와서 (require) http 상수에 할당

const server = http.createServer((req, res) => {
    // createServer() 함수로 서버를 만든다.
    console.log(`request from client`);
});

server.listen(3001, () => {
    console.log('3001번 포트번호에서 서버 실행중입니다!');
});
