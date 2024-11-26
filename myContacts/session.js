const express = require("express"); // express module import
const session = require("express-session"); /* express-session module import. 이 module은 express에서 session을 관리한다.
session 정보를 암호화 해서 server에 저장하고 client에게는 session id를 전달. */
const MongoStore = require("connect-mongo"); /* connect-mongo module import. 이 module은 MongoDB에 session을 저장하고 session 정보를 조회.
이 module에서 session 함수를 사용할 수 있도록 해야 함. */

require("dotenv").config(); /* package module dotenv를 로드하고 설정파일 .env를 읽어와 환경변수를
현재 프로세스 환경 변수로 설정하는 역할을 한다. .env  파일이 있다면 dotenv.config()를 호출하면
이 파일에서 정의된 환경 변수들이 node.js 프로세스의 process.env 객체에 추가된다. 
.env 파일에 설정된 환경변수가 DB_CONNECT를 다음과 같이 호출하면 된다.
'process.env.DB_CONNECT' 로 호출한다. */

const app = express();

app.use(
  session({
    secret: "secret code", // session secret key (cookie 변조를 막기 위해 사용), 반드시 설정해야 함.
    resave: false, // 변경할 사항이 있을 때만 session을 다시 저장하고, 변경 내용 없다면 session을 다시 저장 안함.
    saveUninitialized: true, // 초기화 하지 않은 session을 저장
    store: MongoStore.create({ mongoUrl: process.env.DB_CONNECT }), // MongoDB에 저장
    cookie: { maxAge: 60 * 60 * 24 * 1000 }, // session cookie 유효시간을 24시간(밀리초 단위)으로 설정. 1초는 1000밀리초.
  })
); // express-session module을 express framework에서 사용할 수 있게 middleware로 등록하고 session도 함께 등록.

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count++; // count 값을 1씩 증가.
    res.send(`${req.session.count} 번째 방문입니다.`); // session에 저장된 count 값을 가져와서 출력
  } else {
    req.session.count = 1; // session count 1로 초기화.
    res.send(`첫 번째 방문입니다.`);
  }
});

app.get("/session", (req, res) => {
  res.send(`session ID : ${req.sessionID}`);
}); // session ID 정보 알아내기

app.get("/delete-session", (req, res) => {
  /*  req.session.destory 함수로 session을 삭제. 혹시 server의 session은 삭제(MongoDB에 저장된 세션 삭제) 되지만 cookie session id는 남아 있을 수 있다.
      그래서 server session 삭제 후 client cookie에서도 session id를 삭제하는 코드가 추가되어야 함. */
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie(connect.sid); // connect.sid에 해당하는 session id를 cookie에서 삭제.
      res.send("세션 삭제");
    }
  });
});

app.listen(5001, () => {
  console.log("5001번 포트번호가 실행됩니다.");
});
