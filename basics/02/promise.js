/* 2015년 ES6에서 추가된 비동기식 처리 프라미스 */

let likePizza = true;

const pizza = new Promise((resolve, reject) => {
    if (likePizza == true) {
        // ==true 는 생략 가능
        resolve(`피자를 주문합니다.`); // 주문 성공했을 때의 then함수로  연결
    }else {
        reject(`피자를 주문하지 않습니다.`); // 주문 실패했을 때의 catch()로 연결
    }
});

pizza.then((result) => console.log(result)).catch((result) => console.log(result));
// 한줄로 연결해서 Promise 체이닝법을 적용