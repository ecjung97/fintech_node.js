// node 서버에서 블로킹 I/O

const http = require('http'); // http 모듈 import

const server = http.createServer((req, res) => {
    // 서버 생성
    if (req.url === "/home") { // 라우팅 주소가 /home일 때 실행
        res.end("HOME");
    }else if (req.url === "/about") {
        res.end("ABOUT");
    }else { // 라우팅 주소가 잘못된 경우
        res.end("Not Found");
    }
});

server.listen(3001, () => {
    console.log("3001 포트번호 서버 실행중");
})