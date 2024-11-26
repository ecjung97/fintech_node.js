const mongoose = require("mongoose"); // 몽구스 모듈 임포트

const Schema = mongoose.Schema; // 몽구스 스키마 가져오기

// 사용자 스키마인 UserSchema 생성
const UserSchema = new Schema({
  username: {
    type: String, // 타입 지정
    required: true, // 반드시 아이디 문서 자료(JSON 데이터)를 저장해야 함 => 필수 자료
    unique: true, // 중복 아이디 자료 저장 못하도록 설정
  },
  password: {
    type: String,
    required: true,
  },
});

// User모델 만들고 내보내기
module.exports = mongoose.model("User", UserSchema);
// User모델과 연결되는 몽고DB users컬렉션이 생성됨.
// 여기서는 몽고DB에 미리 해당 컬렉션인 users를 생성하지 않고 모델 User를 먼저 생성하고 연결해도 users컬렉션이 몽고DB에 생성되고 연결된다.
