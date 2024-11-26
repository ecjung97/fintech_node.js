const express = require("express"); // express module import
const router = express.Router(); // Router 객체 생성
const cookieParser = require("cookie-parser"); // cookie parser module import
const checkLogin = require("../middlewares/checkLogin");

const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
} = require("../controllers/contactController");

router.use(cookieParser()); // Router에서 cookie parser를 사용할 수 있도록 등록

// 모든 연락처 가져오기 + 새 연락처 추가하기
router.route("/").get(getAllContacts, checkLogin); // 모든 연락처 가져오는 함수

router
  .route("/add") // http://localhost:3003/contacts/add 으로 요청할 때
  .get(addContactForm, checkLogin) // 사용자 연락처 추가 폼
  .post(createContact, checkLogin); // 새 연락처 추가 함수

// 연락처 상세보기(개별 연락처 보기) + 연락처 수정/삭제
router
  .route("/:id")
  .get(getContact, checkLogin) // 개별 연락처 상세보기
  .put(updateContact, checkLogin) // 개별 연락처 수정
  .delete(deleteContact, checkLogin); // 개별 연락처 삭제

module.exports = router; // router 객체를 외부로 내보내기
