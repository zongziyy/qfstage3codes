import './scss/index.scss'
// let username = "yaoyao";
document.getElementsByClassName("a")[0].innerHTML = "a盒子红色";
let a = { username: "main", usertype: 1, userpwd: "123456" };
let { username } = a;
console.log(username);