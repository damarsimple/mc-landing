import React from "react";
export default function Footer(props) {
  return (
    <section className="footer mt-5 border border-top bg-silver shadow rounded p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <p>© Copyright 2020 {props.title}</p>
          </div>
          <div className="col-md-6 right">
          </div>
        </div>
      </div>
    </section>
  );
}
