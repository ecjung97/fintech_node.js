/* 주소 요청에 따라 다른 화면이 보이게 하는 라우팅 설정. */

const http = require("http");

const server = http.createServer((req, res) => {
    const {method, url} = req; // 클라이언트 요청에 대한 메서드와 url 가져오기, 구조분해 할당.
    res.setHeader("Content-Type", "text/plain"); // 응답헤더 지정.

    if (method === "GET" && url === "/home") {
        // 전송방식이 GET 이고 라이팅주소(스프링에서는 매핑주소)가 /home 일 때 실행.
        res.statusCode = 200; // 정상상태 응답코드.
        res.end("Home"); // 웹브라우저 화면에 HOME 을 표시.
    }else if (method === "GET" && url === "/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    }else {
        res.statusCode = 404; // 해당 데이터를 찾을 수 없을 때.
        res.end("NOT FOUND");
    }
});

server.listen(3002, () => {
    console.log(`3002번 포트번호로 node server 실행`);
});