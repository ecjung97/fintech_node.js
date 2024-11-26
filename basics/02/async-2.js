/* 콜백함수를 이용한 비동기식 처리 => A->B->C 순서대로 실행된다. */
function displayA() {
    console.log("A");
}
function displayB(callback) {
    setTimeout(()=>{
        console.log(`B`);
        callback();
    },2000); // 2초 뒤에 B가 실행
}
function displayC() {
    console.log(`C`);
}

displayA()
displayB(displayC);