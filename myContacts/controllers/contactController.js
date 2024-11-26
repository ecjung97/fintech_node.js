const asyncHandler = require("express-async-handler"); // 이 모듈을 설치하고 import 하는 이유는 try-catch 예외처리 코드를 생략하기 위해서이다.
const Contact = require("../models/contactModel");
const path = require("path"); // path 모듈 import

/** express-aysnc-handler 모듈 사용하지 않고 try-catch 문을 사용한 코드 */

// //@desc GET all contacts     // 함수에 대한 설명
// //@route GET /contacts       // 요청방식과 요청 URL(라우팅 주소)
// const getAllContacts = async(req, res) => { // 모든 연락처 가져오기 => 비동기 처리
//     try {
//         res.status(200).send("Contacts Page");
//     }catch(error) {
//         res.send(error.message);
//     }
// };

/** express-async-handler 모듈을 사용한 try-catch 문을 생략한 코드 */

//@desc GET all contacts     // 함수에 대한 설명
//@route GET /contacts       // 요청방식과 요청 URL(라우팅 주소)
const getAllContacts = asyncHandler(async (req, res) => {
  // 모든 연락처 가져오기
  const contacts = await Contact.find(); // find() 함수는 비동기식으로 전체 document를 가져온다.

  /** 페이지 렌더링 방법 1 */

  /*
        __dirname 은 혅재 실행중인 파일이 위치한 디렉토리 경로를 문자열로 반환 (글로벌 전역 변수)
        join() 함수는 여러 개의 경로를 받아서 하나의 경로 문자열로 결합한다.
     */
  // const filePath = path.join(__dirname, "../assets", "getAll.html");
  // // 클라이언트에게 지정한 경로의 파일의 내용을 응답한다.
  // res.sendFile(filePath);

  /** 페이지 렌더링 방법 2 */

  // views 폴더에 있는 getAll.ejs 파일을 렌더링(뷰 페이지를 브라우저 화면에 출력)한다.
  // 확장자(.ejs)는 생략 가능
  // "User List" 문자열을 heading 키에 저장하여 getAll.ejs 로 전달한다.
  // res.render("getAll.ejs", { heading: "User List" });

  /** 페이지 렌더링 방법 3 */

  // const users = [
  //     { name: "John", email: "John@aaa.bbb", phone: "010-1234-1234" },
  //     { name: "제인", email: "Jein@gmail.com", phone: "010-1111-1111" }
  // ];
  // // heading 키에 제목을 저장, users 키에 위의 users 배열에 만든 사용자 정보들을 저장하여 getAll.ejs 파일에 데이터 전달
  // res.render("getAll.ejs", { heading: "사용자 목록", users: users });

  /** 페이지 렌더링 방법 4 */

  // MongDB로부터 가져온 데이터가 저장된 contacts 변수를 index.ejs 파일에 전달
  res.render("index", { contacts: contacts });
});

// @desc View and contact form
// @route GET /contacts/add => 라우팅 주소 경로
const addContactForm = (req, res) => {
  // 연락처 추가 폼 뷰페이지로 이동
  res.render("add"); // /views/add.ejs 로 렌더링(브라우저 화면에 뷰 페이지를 보여준다)
};

//@desc Create a contact    // 함수에 대한 설명
//@route POST /contacts     // 요청방식과 요청 URL
const createContact = asyncHandler(async (req, res) => {
  // 새 연락처 추가하기
  console.log(req.body);
  const { name, email, phone } = req.body ?? {};
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 출력되지 않았습니다!");
  }

  // 비동기식으로 새로운 문서(도큐먼트) 데이터를 컬렉션(테이블)에 추가한다.
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  // res.status(201).send("Create Contacts");
  res.redirect("/contacts"); // 새 연락처 추가 후 연락처 목록 페이지로 이동
});

// @desc Get contact            // ID에 대한 연락처 개별 상세정보 보기
// @route GET /contacts/:id     // 요청방식과 요청 URL
const getContact = asyncHandler(async (req, res) => {
  // res.status(200).send(contact); // 기존 코드

  const contact = await Contact.findById(req.params.id); // findById() 함수는 특정조건에 맞는 document만 가져온다.
  // res.status(200).send(contact);
  res.render("update", { contact: contact }); // update.ejs로 렌더링
});

// @desc Update contact         // ID에 해당하는 개별 연락처 수정
// @route PUT /contacts/:id     // 요청방식과 요청 URL
const updateContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`Update Contact for ID : ${req.params.id}`); // 기존 코드

  const id = req.params.id; // /contacts/:id로 전달된 라우트 파라미터 값 id를 변수에 저장
  const { name, email, phone } = req.body; // req.body 에는 put방식으로 전달된 수정 정보가 들어있다.

  /** 수정 방법 1 */
  // // 검색
  // const contact = await Contact.findById(id); // 파라미터 id에 해당하는 document를 검색
  // if(!contact) {
  //     res.status(404);
  //     throw new Error("Contact not fount");
  // }

  // // 수정
  // contact.name = name;
  // contact.email = email;
  // contact.phone = phone;

  // // 수정사항 반영
  // contact.save();

  // res.status(200).json(contact);

  /** 수정 방법 2 */
  // findByIdAndUpdate() 함수를 사용해서 id 값으로 document를 검색한 뒤 수정과 저장을 한꺼번에 처리하기 때문에
  // 중간에 다른 작업을 할 수 없다.
  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true } // findByIdAndUpdate 함수는 수정하기 전에 문서를 반환하지만 new: true 옵션으로 인해 수정 후 변경된 문서를 반환한다.
  );
  //res.status(200).send(updatedContact); // 수정된 내용이 담겨서 출력
  res.redirect("/contacts");
});

// @desc Delete contact         // ID에 해당하는 개별 연락처 삭제
// @route DELETE /contacts/:id  // 요청방식과 요청 URL
const deleteContact = asyncHandler(async (req, res) => {
  /*
    const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  await contact.deleteOne(); // 검색한 문서 삭제

  res.status(200).send(`Delete Contact for ID : ${req.params.id}`); // 기존 코드
  */

  await Contact.findByIdAndDelete(req.params.id); // id에 해당하는 몽고DB자료 문서를 찾아서 바로 삭제하는 작업까지 한꺼번에 처리
  res.redirect("/contacts");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
};
