/*
    기본으로 내보내기 : export default 대상
 */

const goodbye2 = (name) => {
    console.log(`${name}님, 잘가~`);
}

export default goodbye2; // 모듈에서 내보낼 대상이 하나뿐이라면 코드 마지막에 export default 대상을 사용. goodbye2를 내보내기.