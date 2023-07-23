export function displayOthersTimezone(data) {
  const { datetime, timezone } = data;
  const timezoneDisplayOthers = document.querySelector(
    ".timezone-display--others"
  );
  const newOtherTimezone = document.createElement("div");
  newOtherTimezone.className = "others-timezone";
  const newOtherTimezoneLocation = document.createElement("div");
  newOtherTimezoneLocation.className = "others-timezone__location";
  newOtherTimezoneLocation.innerText = timezone.split("/")[1].replace("_", " ");
  const newOtherTimezoneTime = document.createElement("div");
  newOtherTimezoneTime.className = "others-timezone__time";
  newOtherTimezoneTime.innerText = datetime.split("T")[1].slice(0, 5);
  const newOtherTimezoneDate = document.createElement("div");
  newOtherTimezoneDate.className = "others-timezone__date";
  newOtherTimezoneDate.innerText = datetime.split("T")[0];

//   const patchIconCancelButton1 = document.createElement("path");
//   patchIconCancelButton1.setAttribute("fill", "none");
//   patchIconCancelButton1.setAttribute("d", "M0 0h24v24H0z");
//   const patchIconCancelButton2 = document.createElement("path");
//   patchIconCancelButton2.setAttribute(
//     "d",
//     "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
//   );
//   const g = document.createElement("g");
//   g.appendChild(patchIconCancelButton1);
//   g.appendChild(patchIconCancelButton2);
  const newElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
  const iconCancelButton = document.createElement("svg");
  iconCancelButton.setAttribute("stroke", "currentColor");
  iconCancelButton.setAttribute("fill", "currentColor");
  iconCancelButton.setAttribute("stroke-width", "0");
  iconCancelButton.setAttribute("viewBox", "0 0 24 24");
  iconCancelButton.setAttribute("height", "1em");
  iconCancelButton.setAttribute("width", "1em");
//   iconCancelButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconCancelButton.appendChild(newElement);
  const cancelButtton = document.createElement("button");
  cancelButtton.className = "button__cancel";
  cancelButtton.appendChild(newElement);
  newOtherTimezone.appendChild(newOtherTimezoneLocation);
  newOtherTimezone.appendChild(newOtherTimezoneTime);
  newOtherTimezone.appendChild(newOtherTimezoneDate);
  newOtherTimezone.appendChild(cancelButtton);
  timezoneDisplayOthers.appendChild(newOtherTimezone);
}
