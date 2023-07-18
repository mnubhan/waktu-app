let time = {
  fetchTime: function (city) {
    fetch(`https://api.api-ninjas.com/v1/worldtime?city=${city}`, {
      method: "GET",
      contetType: "application/json",
      headers: {
        "X-Api-Key": "V4zGvH+w2qvRZdt+n15KGg==cNfrIvrXqeiq2h8D",
      },
    })
      .then((response) => response.json())
      .then((data) => this.displayTime(data));
  },
  displayTime: function (data) {
    const { datetime } = data;
    const { timezone } = data;
    const { date } = data;
    document.querySelector(".others-timezone__time").innerText = datetime
      .split(" ")[1]
      .replace("_", " ");
    document.querySelector(".others-timezone__date").innerText = date;
    document.querySelector(".others-timezone__location").innerText = timezone
      .split("/")[1]
      .replace("_", " ");
  },
  search: function () {
    this.fetchTime(document.querySelector(".search-bar__input").value);
    // console.log(document.querySelector(".search-bar__input").value);
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
