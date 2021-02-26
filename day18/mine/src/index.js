import React from "react";
import ReactDOM from "react-dom";
// import Yuanxiao from "./App"
import Header from './pages/header.jsx'
import Content from './pages/Content.jsx'
import Footer from './pages/Footer.jsx'

Date.prototype.dateTimeFormat = function (str) {
    let year = this.getFullYear();
    let month = this.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let day = this.getDate();
    day = day < 10 ? "0" + day : day;
    let week = this.getDay();
    let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    let hour = this.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    let minute = this.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let seconds = this.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return str
        .replace("week", weekList[week])
        .replace("year", year)
        .replace("month", month)
        .replace("day", day)
        .replace("hour", hour)
        .replace("minute", minute)
        .replace("seconds", seconds);
};


let date = new Date().dateTimeFormat("year-month-day")
ReactDOM.render(<>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
</>, document.getElementById("root"));