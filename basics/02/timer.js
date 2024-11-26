/* 타이머 함수 실습 예제 */
let remainingTime = 3000; // 남은 시간을 3초로 설(3s(초) = 3000ms)
const waitingInterval = 500; // 대기 시간 간격을 0.5초로 설정

// 함수 표현식과 화살표 함수
const timer = setInterval(() => {
    console.log(`${remainingTime / 1000}초 남음`); // 남은 시간 출력, 1000으로 나눠서 ms를 s(초)로 변환해서 표시
    remainingTime -= waitingInterval; // 남은 시간에서 대기시간 빼기 (3000 - 500 => 2500 - 500 ... )

    if (remainingTime <= 0) {
        console.log("타이머 정지");
        clearInterval(timer); // 타이머 종료
    }
}, waitingInterval); // 0.5초 마다 setInterval()함수 호출하는 타이머