// index.html을 node 서버에서 로딩하기

const http = require("http"); // http 모듈 읽어오기 (import)
const fs = require("fs"); // 파일 시스템 모듈 fs 가져오기 (import)

const server = http.createServer((req, res) => {
    // createServer() 함수로 서버를 만듦.
    res.setHeader("Content-Type", "text/html"); // 응답 헤더 지정
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    /*  __dirname 은 node.js 에서 사용되는 특별한 전역 변수. 현재 파일이 위치한 디렉토리의 절대 경로를 반환함.
        index.html 파일을 utf8 언어코딩 타입으로 읽어들여서 readable stream (readStream)을 생성. */
    readStream.pipe(res);
    /*  readStream.pipe(res) 함수는 readStream 에서 읽은 데이터를 res(http 응답객체)로 전송하는 역할을 함.
        이를 통해 파일의 내용을 http 응답으로 보내거나 다른 stream 을 통해 데이터를 전달할 수 있음.
        이 방법은 데이터를 효율적으로 처리하고 메모리를 절양하는 데 유리함.
        pipe()함수는 2개의 스트림을 연결하는 파이프임. 이 함수를 사용하면 서버에서 자료를 읽어와서 클라이언트에게 기록 즉, 표여줘야 할 때
        데이터를 효율적으로 전송 처리가 가능함. */
});

server.listen(3001, () => {
    // listen()함수로 3001번 포트번호로 서버 실행
    console.log("3001번 포트번호로 node server 실행")
})