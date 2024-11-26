/* 동기식 writeFileSync() 함수로 기존 파일내용을 유지한 채 새로운 내용을 추가 */

const fs = require("fs");

let content = `
    ========================
    새로운 내용을 추가해 봅니다.
    ========================
`;

fs.writeFileSync("./text-2.txt", content, {flag:"a"}); // flag 'a'이면 내용을 추가하기 위해 파일을 연다. 없으면 만듦.