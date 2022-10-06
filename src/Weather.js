import React, { useState } from "react";
import { Col, Dropdown, Row, Form } from "react-bootstrap";
import Countries from "./data/countries.json";

function Weather({weather}) {


  return (
<div className="weather">
            <div className="temp">
             <h1>{console.log(weather)}</h1>
             
            </div>
          </div>
  );
}

export default Weather;