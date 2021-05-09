import React from "react";
import ExitToAppIcon from "../../node_modules/@material-ui/icons/ExitToApp";

export const Resultcards = (props) => {
  return (
    <div
      style={{
        marginTop: "0",
        marginLeft: "4%",
        marginRight: "4%",
        marginBottom: "4%"
      }}
      className="card col-11 col-md-3 col-sm-3"
    >
      <img src={props.thumbnail} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.itemName}</h5>
        <p className="card-text">
          {props.category} , {props.area}
        </p>
        <button
          onClick={() => {
            props.viewmore(props.id);
          }}
          className="btn btn-dark"
        >
          <ExitToAppIcon />
          View More
        </button>
      </div>
    </div>
  );
};
