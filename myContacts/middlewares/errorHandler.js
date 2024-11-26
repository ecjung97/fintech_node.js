const errorHandler = (err, req, res, next) => {
    /* 
        err : 발생한 오류 정보를 담고 있는 객체
        req : 클라이언트로부터 요청받은 정보를 담고 있는 객체
        res : 응답 보내기 위한 정보를 담고 있는 객체
        next : 다음 미들웨어를 호출하기 위한 콜백 함수
    */
    // 에러 상태 코드가 없다면 500의 값이 대입되고, 있다면 err.status 변수의 값이 대입됨
    // 이렇게 기본값을 500으로 설정한 이유는 500 에러 상태코드가 가장 많이 발생하기 때문
    const status = err.status || 500; 

    switch(status) {
        case 400: // 잘못된 요청을 받았을 경우
            res.status(status).json({ 
                title: "Bad Request",
                message: err.message, // err 객체에 담겨있는 에러 메시지 변수
            });
            break;

        case 401: // 권한이 없는 요청을 받았을 경우
            res.status(status).json({
                title: "Unauthorized Request",
                message: err.message,
            });
            break;

        case 403: // 접근 금지
            res.status(status).json({
                title: "Forbidden",
                message: err.message,
            });
            break;

        case 404: // 경로에 파일이 존재하지 않음
            res.status(status).json({
                title: "Not Found",
                messasge: err.message,
            });
            break;

        case 500: // 서버 내부 오류
            res.status(status).json({
               title: "Internel Server Error",
               message: err.message, 
            });
            break;

        default:
            res.status(status).json({
                message: "No Error!"
            });
            break;
    }
};

module.exports = errorHandler;