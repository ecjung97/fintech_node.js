const express = require("express"); // express 모듈 import
const router = express.Router(); // 라우터 객체 생성
const {
  getLogin,
  loginUser,
  logout,
  getRegister,
  registerUser,
} = require("../controllers/loginController");

router
  .route("/")
  .get(getLogin) //http://localhost:3003/ 라우팅 주소가 get방식으로 실행되면 로그인폼으로 이동.
  .post(loginUser); // http://localhost:3003/ 루트 라우팅 주소가 post방식으로 실행되면 로그인 인증 처리.

router.route("/logout").get(logout); // localhost:3003/logout get으로 접근할 때 로그아웃 처리.

router
  .route("/register")
  .get(getRegister) // localhost:3003/register get으로 접근할 때 관리자 등록폼페이지로 이동.
  .post(registerUser); // localhost:3003/register post로 접근하면서 아이디와 암호화 된 비번을 저장.

module.exports = router;
