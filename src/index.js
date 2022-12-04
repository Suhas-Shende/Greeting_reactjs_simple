import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const changecolr = {};
let gcolor;
let gettime = new Date(2022, 11, 4, 17);
gettime = gettime.getHours();
let greet;
if (gettime >= 1 && gettime <= 11) {
  changecolr.color = "green";
  greet = "Good morning";
} else if (gettime >= 12 && gettime <= 17) {
  changecolr.color = "violet";
  greet = "Good Afternoon";
} else if (gettime > 17) {
  changecolr.color = "blue";
  greet = "Good evening";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Brother<span style={changecolr}> {greet}</span>
      </h1>
    </div>
  </>,

  document.getElementById("root")
);
