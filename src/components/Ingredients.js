import React from "react";

export function Ingredients(props) {
  return (
    <div style={{ margin: "10px" }}>
      <button className="btn btn-dark"> {props.item} </button>
    </div>
  );
}
