// 비동기식 프로그램 예제
function displayA() {
    console.log("A");
}
function displayB() {
    setTimeout(()=> {
        console.log(`B`);
    },2000); // 2초 뒤에 B가 실행
}
function displayC() {
    console.log(`C`);
}

displayA();
displayB();
displayC(); // 동기식 프로그램이면 실행순서가 A->B->C가 되지만 비동기식 프로그램이어서 실행순서가 A->C->B가 됨.