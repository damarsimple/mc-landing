import React from "react";

import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

export default function About(props) {
  return (
    <section id="about" className="container mt-3 mb-5">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="text-uppercase text-center font-weight-bold">
            {props.langAboutUs}
          </h2>
          <h5 className="text-muted text-center">{props.langAboutUsSubtitle}</h5>
          <hr></hr>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12 col-md-8">
          <Fade left>
            <p>{props.langAboutDescription}</p>
          </Fade>
          <RubberBand>
            <button className="btn btn-dark mt-3 p-3">{props.langJoin}</button>
          </RubberBand>
        </div>

        <div className="col-md-4">
          <img
            className="img-fluid"
            width="3000px"
            src={props.logo}
            alt="Main Logo"
          />
        </div>
      </div>
    </section>
  );
}
