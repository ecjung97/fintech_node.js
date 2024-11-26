const express = require("express"); // express를 사용해 서버를 만들려면 우선 express 패키지 모듈을 import 해야한다.
// const path = require("path"); // path 모듈을 가져온다.
//const errorHandler = require("./middle_wares/errorHandler");
const dbConnect = require("./config/dbConnect"); // dbConnect 패키지 모듈 import
const methodOverride = require("method-override"); // method-override 모듈을 임포트

// express를 실행하면 app라는 서버가 만들어진다.
// 이제부터 app 객체로 express의 모든 기능을 사용할 수 있다.
const app = express();
const port = 3003; // 상수 port에 3003번 포트번호 할당
//const router = express.Router();

// express 에서 EJS 뷰 엔진을 사용할 것이라고 선언.
// 위와 같이 선언할 경우 express 에서 확장자(.ejs)인 파일을 템플릿 파일로 인식한다.
app.set("view engine", "ejs");
// express에 views 페이지 경로를 정의한 것(Context Path 하위에 views 폴더)
app.set("views", "./views");

// 정적 파일 위치를 Express에 정의 => css.js(javascript).이미지 등 정적파일이 들어감.
app.use(express.static("./public"));

// methodOverried를 익스프레스 미들웨어에서 사용할 수 있게 등록.
app.use(methodOverride("_method")); //(이것의 역할은 post방식으로 전송되는 곳에서 다른 전송방식인 PUT, DELETE로 변경하는 데 사용)

// dbConnect 함수를 호출해서 몽고DB 연결 테스트
dbConnect();

// const logger = (req, res, next) => {
//   console.log("User Logged");
//   next(); // 종료하지 않고 다음 미들웨어를 연결해서 호출
// };
// app.use(logger); // logger를 미들웨어에 등록

// const requestTime = (req, res, next) => {
//   let today = new Date(); // Date 날짜 객체 생성
//   let now = today.toLocaleTimeString(); // 현재 시간을 문자열로 변환

//   // 다른 미들웨어에서 가져다쓰기 위해 requestTime(요청시간)을 현재 시간으로 저장
//   req.requestTime = now;
//   next(); // 종료하지 않고 다음 미들웨어 호출
// };
// app.use(requestTime); // express 에 미들웨어 중간함수로 requestTime 등록

// 루트(/)로 요청 받았을 때 라우트 경로, 루트 경로 GET 방식으로 요청받으면
// get() 함수를 사용하여 요청받은 것에 대한 응답으로 콜백함수의 결과를 보냄
// app.get("/", (req, res) => {
//   // res.status(200); // 200 정상 응답 상태 코드
//   // res.send("Hello Node!"); // 클라이언트 웹 브라우저에 전달. 즉, 화면에 표시할 문자열

//   // res.status(200).send("Hello Node!"); // 위의 응답코드를 메소드 체이닝으로 바꾼 코드

//   // const headers = req.headers; // GET 요청을 보낼 때 요청 헤더에 담긴 내용을 저장한다.
//   // res.send(headers);

//   // res.status(200).json({ message: "Hello Node!" }); // JSON 키, 값 쌍으로 전송

//   const responseText = `Hello Node! \n 요청시간 : ${req.requestTime}`;

//   // 클라이언트에게 응답 데이터가 순수 텍스트 형식임을 Content-Type 헤더를 통해 전달
//   // 이를 통해 클라이언트는 데이터를 HTML로 렌더링하거나 JSON으로 파싱하지 않고,
//   // 텍스트 그대로 화면에 표시하게 된다.
//   res.set("Content-Type", "text/plain");
//   res.send(responseText);
// });

//app.use(logger); // .get("/", ()=>{}) 함수보다 실행 순서가 늦기 때문에 console에 메시지 출력 안됨
// 그 외의 현재 코드보다 아래에 위치한 미들웨어보다는 먼저 실행되어 console에 메시지 출력됨

/** 처음 실습 */
// // 모든 연락처 가져오기
// router.get("/contacts", (req, res) => {
//     res.status(200).send("Contacts Page 입니다.");

//     // __dirname은 현재 파일이 저장된 디렉터리 절대경로를 반환
//     // sendFile() 함수는 지정한 경로의 파일을 읽어서 전송한다.
//     // res.sendFile(__dirname + "/assets/contacts.html");
// });

// // post 방식으로 새 연락처 추가하기
// router.post("/contacts", (req, res) => {
//     res.status(201).send("Create Contacts 입니다.");
// });

// // 연락처 상세보기
// router.get("/contacts/:id", (req, res) => {
//     res.status(200).send(`View Contact for ID : ${req.params.id}`)
// });

// // 연락처 수정하기
// router.put("/contacts/:id", (req, res) => {
//     res.status(200).send(`Update Contact for ID : ${req.params.id}`);
// });

// // 연락처 삭제하기
// router.delete("/contacts/:id", (req, res) => {
//     res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
// });
// app.use(router); // 라우터를 express 미들웨어에 등록

/* 
    Express에서 JSON 형식의 요청 내용을 파싱하기 위해서 사용되는 내장 미들웨어를 설정하는 코드 
    이 코드를 사용하면 JSON 형식의 요청을 쉽게 처리할 수 있다.
    사용자가 POST나 PUT 요청으로 JSON 데이터를 전송할 때, 
    Express는 자동으로 JSON 데이터를 파싱(JSON형식을 객체로 변환)하여 req.body 객체에 저장한다.
*/
app.use(express.json());

/* 
    express 미들웨어 함수로서 POST 요청을 받아서 URL-encoded 된 데이터를 해석(디코딩)하여
    javascript 객체로 변환해준다. extended: true로 설정하면 복잡한 객체나 배열까지도 파싱한 뒤
    한글 데이터가 있다면 서버로 전송하면 아스키 문자 형태로 변경되어 전송된다.
 */
app.use(express.urlencoded({ extended: true }));

// app.use(router); // 라우터를 express 미들웨어에 등록
app.use("/", require("./routes/loginRoutes"));
app.use("/contacts", require("./routes/contactRoutes"));

//app.use(errorHandler); // 오류 처리 미들웨어 등록`

// 오류 처리 /test 라우터 등록 처리
// app.get("/test", (req, res, next) => {
//   const error = new Error("테스트용 에러"); // 오류 발생 메시지
//   error.status = 401; // 에러 상태 코드
//   next(error); // 다음 미들웨어인 app.use(errorHandler)를 호출해서 오류를 전달해서 처리
// });

app.listen(port, () => console.log(`${port}번 포트번호로 서버 실행 중!!`));
