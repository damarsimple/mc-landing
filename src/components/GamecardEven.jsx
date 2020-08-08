import React from "react";

export default function GamecardEven(props) {
  return (
    <section>
      <div className="row mt-2 mb-2">
        <div className="col-xs-12 col-md-3">
          <img
            src={props.image}
            width="250px"
            alt="Games"
          />
        </div>
        <div className="col-md-9">
          <h2>{props.name}</h2>
          <h5>{props.subtitle}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
