import { displayMainTimezone } from "./displayMainTimezone.js";

export function fetchTimeByIp(ip){
    fetch(`https://worldtimeapi.org/api/ip/${ip}`).then(response => response.json()).then(data => displayMainTimezone(data));
  }