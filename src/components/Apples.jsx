import React from "react";
import apple from "../images/apple1.svg";

export default function Apples(props) {
  return (
    <div>
      <img
        className={`apple ${props.className}`}
        style={props.style}
        src={apple}
      />
    </div>
  );
}
