import React from "react";
import apple from "../images/apple1.svg";

export default function Apples(props) {
  return (
    <div>
      {/* We get apple styles and className from props in the Tree component */}
      <img
        className={`apple ${props.className}`}
        style={props.style}
        src={apple}
      />
    </div>
  );
}
