import React from "react";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
export default function Home(props) {
  return (
    <Fade delay={1000} top>
      <section
        id="home"
        className="d-flex align-items-center position-relative vh-100 cover showcase Front-bg classes"
      >
        <div className="container text-center">
          <RubberBand delay={1100}>
            <img
              className="img-fluid"
              width="300px"
              src={props.logo}
              alt="logo"
            />
          </RubberBand>
          <br />
          <br />
          <br />
          <Fade delay={1300} top>
            <h1 className="text-uppercase text-light font-weight-bold ">
              {props.title}
            </h1>
          </Fade>
          <Fade delay={1400} top>
            <h3 className="mt-3 text-light">
              {props.status
                ? props.count + " " + props.langCurrentlyPlaying
                : props.langServerOffline}
            </h3>
          </Fade>
          <br />
          <Zoom delay={1500}>
            <a href={props.registerLinks}>
              <button className="btn btn-dark mt-3 p-3">{props.langJoin}</button>
            </a>
          </Zoom>
        </div>
      </section>
    </Fade>
  );
}
