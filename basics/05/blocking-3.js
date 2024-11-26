// 서버에서 블로킹 I/O -> 시간이 많이 걸리는 코드가 추가 : 노드 서버에서 동기식으로 프로그램이 실행되는 중간에 멈추는 블로킹 현상이 발생

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.end('HOME');
    }else if (req.url === '/about') {
        for (let i=1;i<=1000;i++) { // 블로킹 현상을 내기 위해서 인위적으로 오래 걸리는 작업코드
            for (let j=1;j<=1000;j++) {
                console.log(`${i} ${j}`);
            } // inner for
        } // outer for
    }else {
        res.end("Not Found");
    }
});

server.listen(3001, () => {
    console.log("3001번 포트번호에서 노드 서버 실행 중");
});