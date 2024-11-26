/*
    export {대상1, 대상2, ...} 모듈을 여러 개 내보내기
 */
const hi = (name) => {
    console.log(`${name}님, 안녕하세요`);
};

const goodbye = (name) => {
    console.log(`${name}님, 안녕히 가세요`);
};

export {hi, goodbye}; // hi, goodbye 상수 동시에 내보내기