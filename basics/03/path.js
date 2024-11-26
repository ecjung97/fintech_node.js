const path = require("path"); // path모듈 임포트

const fullPath = path.join("some", "work", "ex.txt"); // join()함수로 경로 연결해서 합치기
console.log(`fullPath = ${fullPath}`); // some\work\ex.txt

console.log(`파일 절대 경로 : ${__filename}`); // 폴더와 파일을 포함한 전체 절대 경로

const dir = path.dirname(__filename); // 파일만 뺀 절대경로를 구함.
console.log(`파일만 뺀 절대경로 : ${dir}`);

const fn = path.basename(__filename); // 전체 절대경로에서 확장자를 포함한 파일명만 구함
console.log(`경로에서 확장자를 포함한 파일명 : ${fn}`); // path.js

const fn2 = path.basename(__filename, ".js"); // 전체 절대경로에서 확장자 .js를 뺀 파일명만 구함
console.log(`경로에서 확장자 .js.를 뺀 파일명 : ${fn2}`); // path

const ext = path.extname(__filename); // 전체 절대경로에서 파일의 확장자만 구함
console.log(`경로에서 파일 확장자 : ${ext}`); // .js

console.log(`경로에서 확장자를 뺀 파일명만 구함 : ${path.basename(__filename, ext)}`); // path

const parsedPath = path.parse(__filename); // 전체 절대경로에서 경로를 분해하기
console.log(parsedPath); // 분해된 경로는 루트 폴더, 폴더 경로, 파일명, 확장자, 확장자를 제외한 파일명

