import { fetchTime } from "./fetchTime.js";

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
