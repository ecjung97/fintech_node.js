/* 함수 표현식, 화사료 함수, 콜백함수를 다루는 예제 */
const order = (coffee,callback) => {
    console.log(`${coffee} 주문 접수`);
    setTimeout(()=>{
        callback(coffee); // 3초 뒤에 콜백함수 display호출
    }, 3000);
};

const display = (result) => {
    console.log(`${result} 주문 완료`);
};

order("복숭아 아이스티", display);