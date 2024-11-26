require("dotenv").config(); /* package module dotenv를 로드하고 설정 파일 (.env)를 읽어와 환경 변수를 현재 프로세스의 환경변수로 설정하는 역할을 한다.
.env 파일이 있다면, dotenv.config()를 호출하면 이 파일에서 정의한 환경 변수들이 node.js 프로세스의 process.env 객체에 추가된다. */
const jwt = require("jsonwebtoken"); // JWT module package import.
const jwtSecret = process.env.JWT_SECRET;
/* JWT를 생성하거나 검증할 때 사용할 비밀키를 환경 변수에서 가져와서 jwtSecret변수에 할당하는 것을 의미. */

const checkLogin = async (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  /* cache 처리에 관한 code 작성. 이 code는 browser의 cache를 막기 위해 필요함.
      no-cache: browser에서 cache를 사용하지 않고, server에서 응답을 매번 다시 받아야 함.
      no-store: server의 응답을 cache에 저장하지 않음.
      must-revalidate: 만일 cache에 있는 정보르 사용하더라도 반드시 server에 다시 확인해야 함.
  */
  const token = req.cookies.token; // cookie에서 token 값 가져오기.

  if (!token) {
    // token이 없다면 로그인 안된 상태
    return res.redirect("/"); // 로그인 페이지로 이동
  }

  try {
    const decoded = jwt.verify(token, jwtSecret); // token 해석
    req.username = decoded.username; // 해석된 token 사용자 이름을 요청 사용자에게 할당
    next(); // 다음 middleware 작업으로 넘김.
  } catch (error) {
    return res.status(401).json({ message: "로그인이 필요합니다!" });
  }
};

module.exports = checkLogin;
