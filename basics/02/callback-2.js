/*  콜백 함수 안에 또 다른 콜백함수를 연속적으로 사용해서 가독성이 너무 안좋아 유지보수 하기가 어렵다.
    이렇게 콜백이 계속 반복되는 상태를 '콜백 지옥'이라고 한다.
    이런 문제점을 해결하기 위해서 2015년에 추가된 ES6문법중에서 프라미스가 있다.
 */
// 콜백 지옥 예제 소스 -> 비 권장 소스이다.
function displayLetter() {
    console.log("A");

    setTimeout(()=> {
        console.log(`B`);
        setTimeout(()=> {
            console.log(`C`);
            setTimeout(() => {
                console.log(`D`);
                setTimeout(() => {
                    console.log('STOP !');
                }, 1000); // 1초 뒤에 STOP
            }, 1000); // 1초 뒤에 D가 실행
        },1000); // 1초 뒤에 C가 실행
    }, 1000); // 1초 뒤에 B가 실행
}

displayLetter();