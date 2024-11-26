const express = require("express"); // express module import
const cookieParser = require("cookie-parser"); // cookie-parser module import

const app = express(); // express server app 생성
app.use(cookieParser()); // cookie-parser를 express에서 사용할 수 있게 middleware(중간서버)에 등록

app.get("/", (req, res) => {
  res.cookie("Kim", "1234", { httpOnly: true });
  /*  name이 Kim, value값이 1234로 구성된 쿠키를 생성한다. 추가 옵션으로 주어진 httpOnly:true는 http통신에서만 쿠키가 사용되도록 설정을 제한한다.
      이유는 자바스크립트 등을 통해서 쿠키를 조작하거나 접근하는 것을 막을 수 있다. => 보안강화 */
  res.send("쿠키 생성");
});

app.get("/cookie", (req, res) => {
  console.log(req.cookies); // req.cookies로 생성된 cookie 이름과 값을 구함.
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("Kim"); // Kim 쿠키이름을 가진 쿠키를 삭제
  res.send("쿠키 삭제");
});

app.listen(5000, () => {
  console.log("5000번 port 번호로 node server 실행중입니다.");
});
