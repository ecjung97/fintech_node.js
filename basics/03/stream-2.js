const fs = require('fs'); // 파일시스템 모듈 import

/* README.txt 파일을 chunk 단위로 읽어와서 다시 chunk 단위로 WRITEME.txt 파일에 기록하는 예제 */
const readStream = fs.createReadStream("README.txt", 'UTF-8');
const writeStream = fs.createWriteStream("WRITEME.txt");

readStream.on("data", (chunk) => {
    console.log(`buffer 크기만큼만 읽어오고 기록한다.`);
    writeStream.write(chunk);
});