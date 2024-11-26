// 노드몬이 제대로 작동되는지 확인하는 테스트 코드 소스

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request received");
    res.write(`코드 수정`);
});

server.listen(3002, () => console.log(`3002번 포트번호로 Node 서버 실행 중`));