/* 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료 */

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method); // 요청 메서드 확인

    res.setHeader("Content-type", "text/plain"); // 응답 헤더
    res.write("node server start!"); // 응답 본문
    res.end(); // 응답 종료
});

server.listen(3001, () => {
    console.log("3001번 포트번호로 노드 서버 실행중");
});