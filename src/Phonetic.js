import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic-audio">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-circle-play" />
      </a>{" "}
      <span className="Phonetic-text">
        <span className="text">{props.phonetic.text}</span>
      </span>
    </div>
  );
}
