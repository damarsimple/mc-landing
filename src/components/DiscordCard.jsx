import React from "react";

import { FaDiscord } from "react-icons/fa";

export default function InstagramCard(props) {
  return (
    <div className="card p-5 ">
      <FaDiscord className="align-self-center" size="5em" />
      <h2 className="text-uppercase text-center font-weight-bold">Discord</h2>
      <hr></hr>
      <h5 className="text-center">{props.description}</h5>
      <div className="d-flex justify-content-center">
        <a href={props.links}>
          <button className="btn btn-primary">JOIN</button>
        </a>
      </div>
    </div>
  );
}
