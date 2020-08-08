import React from "react";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
export default function Home(props) {
  const data = props.props;
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
              width="250px"
              src="/logo512.png"
              alt="logo"
            />
          </RubberBand>
          <br />
          <br />
          <br />
          <Fade delay={1300} top>
            <h1 className="text-uppercase text-light font-weight-bold ">
              {data.title}
            </h1>
          </Fade>
          <Fade delay={1400} top>
            <h3 className="mt-3 text-light">
              {props.status
                ? props.count + " " + data.langCurrentlyPlaying
                : data.langServerOffline}
            </h3>
          </Fade>
          <br />
          <Zoom delay={1500}>
            <button href={data.registerLinks} className="btn btn-dark mt-3 p-3">{data.langJoin}</button>
          </Zoom>
        </div>
      </section>
    </Fade>
  );
}
