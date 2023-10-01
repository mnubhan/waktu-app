export function displayOthersTimezone(data) {
  const { datetime, timezone } = data;
  const timezoneDisplayOthers = document.querySelector(
    ".timezone-display--others"
  );
  const time = datetime.split("T")[1].slice(0, 5).split(":");
  /* Create Div element for others-timezone */
  const newOtherTimezone = document.createElement("div");
  newOtherTimezone.className = "others-timezone";
  /* Create Div element for location */
  const newOtherTimezoneLocation = document.createElement("div");
  newOtherTimezoneLocation.className = "others-timezone__location";
  newOtherTimezoneLocation.innerText = timezone.split("/")[1].replace("_", " ");
  /* Create Span element for : */
  const colon = document.createElement("span");
  colon.innerText = ":";
  /* Creat Span element for minute */
  const newOtherTimezoneMinute = document.createElement("span");
  newOtherTimezoneMinute.className = "others-timezone__time--minute";
  newOtherTimezoneMinute.innerText = time[1];
  /* Creat Span element for hour */
  const newOtherTimezoneHour = document.createElement("span");
  newOtherTimezoneHour.className = "others-timezone__time--hour";
  newOtherTimezoneHour.innerText = time[0];
  /* Create Div element for time */
  const newOtherTimezoneTime = document.createElement("div");
  newOtherTimezoneTime.className = "others-timezone__time";
  newOtherTimezoneTime.appendChild(newOtherTimezoneHour);
  newOtherTimezoneTime.appendChild(colon);
  newOtherTimezoneTime.appendChild(newOtherTimezoneMinute);
  /* Create Dive element for date */
  const newOtherTimezoneDate = document.createElement("div");
  newOtherTimezoneDate.className = "others-timezone__date";
  newOtherTimezoneDate.innerText = datetime.split("T")[0];
  /* Create Cross Icon */
  const setAttributeList = (element, props) => {
    Object.entries(props).forEach(([key, value]) => {
      element.setAttributeNS(null, key, value);
    });
  };
  const crossPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  setAttributeList(crossPath, {
    fill: "none",
    stroke: "#6A6965",
    "stroke-width": "2",
    d: "M7,7 L17,17 M7,17 L17,7",
  });
  const crossSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  setAttributeList(crossSvg, {
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
  });
  crossSvg.appendChild(crossPath);
  const crossIcon = document.createElement("div");
  crossIcon.className = "cross-icon";
  crossIcon.appendChild(crossSvg);
  crossIcon.addEventListener("click", (e) =>
    e.target.closest(".others-timezone").remove()
  );
  newOtherTimezone.appendChild(newOtherTimezoneLocation);
  newOtherTimezone.appendChild(newOtherTimezoneTime);
  newOtherTimezone.appendChild(newOtherTimezoneDate);
  newOtherTimezone.appendChild(crossIcon);
  timezoneDisplayOthers.appendChild(newOtherTimezone);
  setInterval(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => data.datetime.split("T")[1].slice(0, 8).split(":"))
      .then((time) => {
        newOtherTimezoneHour.innerText = time[0];
        newOtherTimezoneMinute.innerText = time[1];
      });
  }, 1000);
}
