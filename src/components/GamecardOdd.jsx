import React from "react";

export default function GamecarddOdd(props) {
  return (
    <section>
      <div className="row">
        <div className="col-md-9">
          <h2>{props.name}</h2>
          <h5>{props.subtitle}</h5>
          <p>
            {props.description}
          </p>
        </div>
        <div className="col-md-3">
          <img
            src={props.image}
            width="250px"
            alt="Game"
          />
        </div>
      </div>
    </section>
  );
}
