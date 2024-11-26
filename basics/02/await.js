/* 2017년 ES8버전에서 추가된 비동기식 처리 예약어 async, await 관한 실습 */
async function init() {
    // init()함수를 정의할 때 해당 함수 아페 async키워드를 붙여서 선언하면 그 함수 안에서 await키워드를 붙여서 비동기식 처리가 가능하다.
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // await는 async 함수안에서만 사용가능하다. 에크마 스크립트 2015이후에 등장한 fetch()함수는 네트워크를 통해서 서버 자료를 가져온다.
    // 이 함수로 가져올 때 시간이 걸릴 수 있어서 await로 비동기 처리한다.

    const users = await response.json(); // response.json()함수는 서버에서 가져온 프라미스 객체를 프로그램에서 사용할 수 있는 객체로 반환.
    // 물론 이 과정도  시간이 걸려서 await로 비동기 처리 json데이터가 users상수에 저장

    console.log(users);
}
init();