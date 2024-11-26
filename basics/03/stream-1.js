// 데이터를 읽기 위한 리더블 스트림 예제
const fs = require("fs");

const readStream = fs.createReadStream("README.txt"); // README.txt 파일을 읽어와서 readStream 상수에 할당.

readStream.on("data", (chunk) => {
    // data 는 스트림에서 데이터를 읽어올 때마다 발생하는 이벤트이다. 즉, 데이터를 읽어올 때마다 버퍼 크기만큼만 가져온다.
    console.log("데이터를 버퍼크기만큼만 읽어올 때 마다 표시:");
    console.log(chunk);
});

readStream.on("end", () => {
    // 스트림에서 데이터를 모두 읽었다면 end 이벤트가 발생
    console.log("\n =========================== \n");
    console.log("데이터를 모두 읽었다.");
});

readStream.on("error", (err) => {
    // 스트림에서 오류가 발생할 때 error 이벤트가 발생
    console.log("\n =========================== \n");
    console.log(`에러 : ${err}`);
    console.log("\n =========================== \n");
});