const users = require("./users-3"); // users-3을 users 객체로 임포트
const hello = require("./hello");

console.log(users);
hello(users.user3); // 객체명.키이름으로 접근
hello(users.user2);
hello(users.user1);
