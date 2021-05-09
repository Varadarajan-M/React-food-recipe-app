import React, { useState } from "react";

export const Searchbox = (props) => {
  const [item, setItem] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setItem(value);
  }

  return (
    <div className="main" style={{ margin: "7%" }}>
      <div className="heading">
        <h2>Food Recipes</h2>{" "}
      </div>
      <div className="search">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Item Name"
          className="form-control w-50"
        />
        &nbsp;
        <button
          onClick={() => {
            props.onclick(item);
          }}
          className="btn btn-dark"
        >
          Search
        </button>
      </div>
    </div>
  );
};
