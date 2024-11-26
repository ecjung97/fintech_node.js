const mongoose = require("mongoose"); // 몽구스 패키지 모듈을 import
require("dotenv").config(); /** 패키지 모듈 dotenv를 로드하고 설정파일 .env를 읽어와 환경변수를
현재 프로세스 환경 변수로 설정하는 역할을 한다. .env  파일이 있다면 dotenv.config()를 호출하면
이 파일에서 정의된 환경 변수들이 node.js 프로세스의 process.env 객체에 추가된다. 

.env 파일에 설정된 환경변수가 DB_CONNECT를 다음과 같이 호출하면 된다.
'process.env.DB_CONNECT' 로 호출한다.
*/

const dbConnect = async () => { // 비동기식 처리
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT); // 비동기식으로 mongoose connect()함수로 몽고DB에 접속한다.
        console.log("몽고DB 연결 성공");
    }catch(err) {
        console.log(err);
    }

};

module.exports = dbConnect; // dbConnect 모듈 함수를 내보낸다.






