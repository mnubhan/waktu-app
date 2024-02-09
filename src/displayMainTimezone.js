export const displayMainTimezone = (data) => {
  const { datetime, timezone } = data;
  const time = datetime.split("T")[1].slice(0, 8).split(":");
  const date = datetime.split("T")[0];
  const location = timezone.split("/")[1].replace("_", " ");
  /* Create location div */
  const locationDiv = document.createElement("div");
  locationDiv.setAttribute("class", "main-timezone__location");
  locationDiv.innerText = location;
  /* Create time div */
  const timeDiv = document.createElement("div");
  timeDiv.setAttribute("class", "main-timezone__time");
  const hourSpan = document.createElement("span");
  hourSpan.setAttribute("class", "main-timezone__time--hour");
  hourSpan.innerText = time[0];
  const colonSpan1 = document.createElement("span");
  colonSpan1.innerText = ":";
  const colonSpan2 = document.createElement("span");
  colonSpan2.innerText = ":";
  const minuteSpan = document.createElement("span");
  minuteSpan.setAttribute("class", "main-timezone__time--minute");
  minuteSpan.innerText = time[1];
  const secondSpan = document.createElement("span");
  secondSpan.setAttribute("class", "main-timezone__time--second");
  secondSpan.innerText = time[2];
  timeDiv.appendChild(hourSpan);
  timeDiv.appendChild(colonSpan1);
  timeDiv.appendChild(minuteSpan);
  timeDiv.appendChild(colonSpan2);
  timeDiv.appendChild(secondSpan);
  /* Create date div */
  const dateDiv = document.createElement("div");
  dateDiv.setAttribute("class", "main-timezone__date");
  dateDiv.innerText = date;
  const mainTimezone = document.querySelector(".main-timezone");
  mainTimezone.appendChild(locationDiv);
  mainTimezone.appendChild(timeDiv);
  mainTimezone.appendChild(dateDiv);
  setInterval(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => data.datetime.split("T")[1].slice(0, 8).split(":"))
      .then((time) => {
        hourSpan.innerText = time[0];
        minuteSpan.innerText = time[1];
        secondSpan.innerText = time[2];
      });
  }, 1000);
};
