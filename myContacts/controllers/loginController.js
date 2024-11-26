const asyncHandler = require("express-async-handler"); // 이 모듈을 설치하고 import 하는 이유는 try-catch 예외처리 코드를 생략하기 위해서이다.
const User = require("../models/userModel"); // 몽고DB에 문서 자료인 아이디와 암호화 된 비번을 저장할 수 있게 userModel import.
const bcrypt = require("bcrypt"); // 비번 암호화를 위한 bcrypt 모듈 import.
require("dotenv").config(); /* package module dotenv를 로드하고 설정 파일 (.env)를 읽어와 환경 변수를 현재 프로세스의 환경변수로 설정하는 역할을 한다.
.env 파일이 있다면, dotenv.config()를 호출하면 이 파일에서 정의한 환경 변수들이 node.js 프로세스의 process.env 객체에 추가된다. */
const jwt = require("jsonwebtoken"); // JWT module package import
const jwtSecret = process.env.JWT_SECRET;
/* JWT를 생성하거나 검증할 때 사용할 비밀키를 환경 변수에서 가져와서 jwtSecret변수에 할당하는 것을 의미 */

// @desc Get login page
// @route GET /
const getLogin = (req, res) => {
  // 로그인 폼 페이지로 이동
  res.render("home"); // / 루트 라우팅 주소가 실행되면 ./views/home.ejs로 랜더링(뷰페이지를 브라우저 화면에 보여주는 것을 말함). 확장자 .ejs는 생략.
};

// @desc Login user
// @route POST /
const loginUser = asyncHandler(async (req, res) => {
  // / 루트 라우팅주소가 post방식으로 실행이 되었을 때 로그인 인증처리 => 같은 라우팅 주소가 실행이 되더라도 메서드 방식이 다르면 다른 라우팅주소로 인식한다.
  const { username, password } = req.body;
  /*  ES6문법에서 추가된 구조분해 할당(비구조화 할당문법)이다. req.body는 post방식으로 전송되는 데이터를 담고 있다.
        구조 분해 할당으로 아이디는 username, 비번은 password로 분해해서 할당 저장한다. */

  const user = await User.findOne({ username }); // 비동기식으로 아이디에 맞는 회원정보만 MongoDB로부터 가져온다.

  if (!user) {
    // 아이디에 해당하는 회원정보가 없는 경우, 오류메세지 표시
    return res.status(401).json({ message: "일치하는 사용자가 없습니다!" });
  }

  const isMatch = await bcrypt.compare(password, user.password); // bcrypt로 입력한 비번을 암호화 해서 MongoDB에 저장된 암호화 된 비번(user.password)과 비교

  if (!isMatch) {
    // 암호화 된 비번이 일치하지 않는 경우
    return res.status(401).json({ message: "비밀번호가 일치하지 않습니다!" });
  }

  const token = jwt.sign({ id: user._id }, jwtSecret); // JWT token 생성
  res.cookie("token", token, { httpOnly: true });
  /* 생성된 token은 client cookie 형태로 저장하기 위해서 응답객체에 담아서 전송한다. 
  httpOnly:true는 cookie를 http 전송에서만 사용하겠다는 의미. 이 옵션을 설정하면 JavaScript를 통해 client에서 cookie에 접근하는 것을 제한할 수 있다.
  이는 XSS(Cross-Site Scripting) 공격으로 부터 보호하기 위한 일반적인 보안 방법 중 하나이다. 따라서 이 code는 client에게 인증 token을 
  안전하게 저장하고자 할 때 사용되며, http 전송에서만 사용되도록 설정된 "token"이라는 이름의 cookie를 설정한다는 의미를 가진다. 
  cookie값은 token상수에 저장된 user._id가 된다. */

  res.redirect("/contacts"); // 로그인 성공하면 /contacts 라우팅 주소인 사용자 연락처 목록으로 이동

  /*
  if (username === "admin" && password === "1234") {
    res.send("Login Success!");
  } else {
    res.send("Login Failed!");
  } 
  */
}); // loginUser

// @desc Logout
// @route GET /logout
const logout = (req, res) => {
  res.clearCookie("token"); // cookie로 부터 token 삭제 => 로그아웃 처리
  res.redirect("/"); // 로그아웃 되었으면 로그인 페이지로 이동
}; // logout

// @desc Register Page
// @route GET / register
const getRegister = (req, res) => {
  // 관리자(사용자) 등록페이지
  res.render("register"); // register.ejs로 랜더링
};

// @desc Register user
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
  // 관리자(사용자) 정보 저장
  const { username, password, password2 } = req.body;
  /* req.body에는 post로 전송된 아이디, 비번, 비번확인이 저장되어 있다. 이것을 ES6에서 추가된 구조분해할당(비구조 분해 할당문법)에 의해서 각 값을 분해 할당한다. */

  if (password == password2) {
    const hashedPassword = await bcrypt.hash(password, 10); // bcrypt를 이용해 비밀번호 암호화.
    const user = await User.create({ username, password: hashedPassword }); // 아이디와 암호화 된 비번을 몽고DB에 저장시키고 user를 생성
    res.status(201).json({ message: "Register success!", user });
  } else {
    res.send("Register Failed");
  }
});

module.exports = { getLogin, loginUser, getRegister, registerUser, logout };
