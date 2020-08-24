import React from "react";
import Swing from "react-reveal/Swing";
import Fade from "react-reveal/Fade";
export default function Vote(props) {
  return (
    <section id="vote" className="container mt-3 mb-5">
      <div className="row">
        <div className="col-xs-12">
          <Fade delay={800}>
            <h2 className="text-uppercase text-center font-weight-bold">
              {props.langVote}
            </h2>
          </Fade>
          <Fade delay={900}>
            <h5 className="text-muted text-center">{props.langVoteDescription}</h5>
          </Fade>
          <hr></hr>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12 d-flex justify-content-center">
          <Fade top delay={950}>
          <Swing delay={1000}>
            <button className="btn btn-success p-3 pr-5 pl-5 m-3">
              {props.langButton1}
            </button>
          </Swing>
          <Swing delay={1200}>
            <button className="btn btn-danger p-3 pr-5 pl-5 m-3">
              {props.langButton2}
            </button>
          </Swing>
          <Swing delay={1300}>
            <button className="btn btn-danger p-3 pr-5 pl-5 m-3">
              {props.langButton3}
            </button>
          </Swing>
          </Fade>
        </div>
      </div>
    </section>
  );
}
