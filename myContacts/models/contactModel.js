const mongoose = require("mongoose"); // 몽구스 모듈 import

const contactSchema = new mongoose.Schema(
    {
        name: { // name 속성(필드, 컬럼) 정의
            type: String, // 속성 필드 타입으로 문자열 정의
            required: true, // 필수 속성 -> 반드시 데이터를 입력해야 한다.
        },
        email: {
            type: String,
            /** required: true 생략하면 기본값을 false이다.  */
        },
        phone: {
            type: String,
            required: [ true, "폰번호는 반드시 기입해주세요." ], // 폰번호를 입력하지 않으면 유효성 검증 메시지를 지정
        }
    },
    {
        timestamps: true, // 몽고DB에 데이터를 추가하거나 수정하면 시간이 기록된다.
    }
);

/** mongoose.model() 함수를 사옹해서 모델을 생성한다.
 * 첫번째 인자값 Contact는 모델명이다. 이 모델명은 문자열이고 첫 글자를 영문대문자로 작성한다.
 * 두번째 인자값은 데이터베이스 스키마이다. 
 */
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact; // Contact 내보내기