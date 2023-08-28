import React from "react";

export default function Example(props) {
  if (props.example && props.example.length > 0) {
    return <span className="example">{props.example}</span>;
  } else {
    return null;
  }
}
