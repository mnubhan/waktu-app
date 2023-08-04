import { displayOthersTimezone } from "./displayOthersTimezone.js";
import {searchCity} from "./searchCity.js";

export function fetchTime(city){
  fetch(`http://worldtimeapi.org/api/timezone/${searchCity(city)}`)
    .then(response => response.json())
    .then(data => displayOthersTimezone(data));
};

