const hi = (name) => {
    console.log(`${name}님, 안녕하세요!`);
};

const goodbye = (name) => {
    console.log(`${name}님, 안녕히 가세요!`);
};

export default {hi, goodbye}; /* 만일 모듈에서 여러 함수, 변수, 상수를 묶어서 내보낼 때 default 키워드를 붙였다면 이것은 객체 1개를
내보낸 것으로 간주함. 그래서 import할 때 * as 없이 객체 이름으로 바로 가져올 수 있다. */