import { fetchTime, } from "./fetchTime.js";
import { fetchTimeByIp } from "./fetchTimeByIp.js"

const otherTimeEvent = () => {
  let time = {
  search: function () {
    fetchTime(document.querySelector(".search-bar__input").value);
    document.querySelector(".search-bar__input").value = "";
  },
};

document
  .querySelector(".search-bar__button")
  .addEventListener("click", () => time.search());

document
  .querySelector(".search-bar__input")
  .addEventListener("keyup", (event) => {
    event.key == "Enter" ? time.search() : null;
  });
}


  window.onload = () => {
    otherTimeEvent();
    fetchTimeByIp(function(){
      fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => fetchTimeByIp(data.ip));
    });
  }