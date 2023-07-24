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
  /*   const patchIconCancelButton1 = document.createElement("path");
  patchIconCancelButton1.setAttribute("fill", "none");
  patchIconCancelButton1.setAttribute("d", "M0 0h24v24H0z");
  const patchIconCancelButton2 = document.createElement("path");
  patchIconCancelButton2.setAttribute(
    "d",
    "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
  );
  const g = document.createElement("g");
  g.appendChild(patchIconCancelButton1);
  g.appendChild(patchIconCancelButton2);
  const newElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
  const iconCancelButton = document.createElement("svg");
  iconCancelButton.setAttribute("stroke", "currentColor");
  iconCancelButton.setAttribute("fill", "currentColor");
  iconCancelButton.setAttribute("stroke-width", "0");
  iconCancelButton.setAttribute("viewBox", "0 0 24 24");
  iconCancelButton.setAttribute("height", "1em");
  iconCancelButton.setAttribute("width", "1em");
  iconCancelButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconCancelButton.appendChild(newElement);
  const cancelButtton = document.createElement("button");
  cancelButtton.className = "button__cancel"; */
  // cancelButtton.appendChild(newElement);
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
    stroke: "#000",
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
  newOtherTimezone.appendChild(newOtherTimezoneLocation);
  newOtherTimezone.appendChild(newOtherTimezoneTime);
  newOtherTimezone.appendChild(newOtherTimezoneDate);
  newOtherTimezone.appendChild(crossIcon);
  timezoneDisplayOthers.appendChild(newOtherTimezone);
}
