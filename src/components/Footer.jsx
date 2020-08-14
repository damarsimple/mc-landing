import React from "react";
import data from "../data";
export default function Footer() {
  return (
    <section className="footer mt-5 border border-top bg-silver shadow rounded p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left">
            <p>© Copyright 2020 {data.title}</p>
          </div>
          <div className="col-md-6 right">
            {/* <p>Made with ❤️ by Lucky Dev Team</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
