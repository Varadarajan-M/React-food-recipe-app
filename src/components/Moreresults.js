import React from "react";
import { Ingredients } from "./Ingredients";
import ArrowBackIcon from "../../node_modules/@material-ui/icons/ArrowBack";

export function Moreresults(props) {
  let urlPart = "https://www.youtube.com/embed/";
  let embedPart = props.video;

  let videoId = embedPart.slice(embedPart.indexOf("=") + 1, embedPart.length);

  let finalUrl = urlPart + videoId;

  return (
    <div>
      <div className="row">
        <div className="more-results-top-img col-md-6 ">
          <h4> {props.itemName} </h4>
          <img className="thumbnail-img" src={props.thumbnail} alt="" />
          <h5>
            <br />
            {props.category} , {props.area}{" "}
          </h5>
        </div>
        <div className="more-results-ingredients col-md-6 col-sm-12">
          <h4>Ingredients</h4>

          <div className="ingredient-rows ">
            <Ingredients item={props.ingredient1} />
            <Ingredients item={props.ingredient2} />
            <Ingredients item={props.ingredient3} />
            <Ingredients item={props.ingredient4} />
          </div>
          <div className="ingredient-rows">
            <Ingredients item={props.ingredient5} />
            <Ingredients item={props.ingredient6} />
            <Ingredients item={props.ingredient7} />
            <Ingredients item={props.ingredient8} />
          </div>

          <div>
            <iframe
              className="youtube-video"
              style={{ float: "left" }}
              width="560"
              height="315"
              src={finalUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="acceleroMeter; autoPlay; clipboardWrite; encryptedMedia; gyroScope; pictureInPicture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="card-body text-center">
        <h4 className="card-text">Instructions</h4>
        <p
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            width: "80%",
            lineHeight: "50px"
          }}
        >
          {props.instructions}
        </p>

        <button
          onClick={() => props.onclick(localStorage.getItem("SearchQuery"))}
          className="btn btn-dark"
        >
          <ArrowBackIcon /> Go Back
        </button>
      </div>
    </div>
  );
}
