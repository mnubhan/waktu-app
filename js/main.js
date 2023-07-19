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
    timezoneDisplayOthers = document.querySelector(".timezone-display--others");
    newOtherTimezone=document.createElement("div")
    newOtherTimezone.className="others-timezone"
    newOtherTimezoneLocation=document.createElement("div")
    newOtherTimezoneLocation.className="others-timezone__location"
    newOtherTimezoneLocation.innerText=timezone.split("/")[1].replace("_", " ")
    newOtherTimezoneTime=document.createElement("div")
    newOtherTimezoneTime.className="others-timezone__time"
    newOtherTimezoneTime.innerText=datetime.split(" ")[1].replace("_", " ")
    newOtherTimezoneDate=document.createElement("div")
    newOtherTimezoneDate.className="others-timezone__date"
    newOtherTimezoneDate.innerText=date
    newOtherTimezone.appendChild(newOtherTimezoneLocation)
    newOtherTimezone.appendChild(newOtherTimezoneTime)
    newOtherTimezone.appendChild(newOtherTimezoneDate)
    timezoneDisplayOthers.appendChild(newOtherTimezone)
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
