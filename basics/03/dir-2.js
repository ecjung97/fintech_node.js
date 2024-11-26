/* recursive 옵션을 true로 설정해서 여러 단계의 폴더를 추가 */

const fs = require("fs");

if (fs.existsSync("./test-2/test-3/test-4")) {
    console.log("folder already exists");
}else {
    fs.mkdir("./test-2/test-3/test-4", {recursive:true}, (err) => {
        if (err) {
            console.log(err);
        }

        console.log("여러 단계 폴더를 생성함");
    });
}