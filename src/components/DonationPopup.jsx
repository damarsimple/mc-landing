import React from "react";
import Popup from "reactjs-popup";
import { FaShoppingCart, FaInfo } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import data from "../data";
export default () => (
  <Popup
    trigger={
      <button className="btn btn-primary">
        <FaShoppingCart /> BUY
      </button>
    }
    modal
    closeOnDocumentClick
    contentStyle={null}
  >
    <Zoom delay={200}>
      <div className="card p-3 shadow rounded d-flex">
        <section className="align-self-center text-center">
          <FaInfo size="5em" color="blue" className="mb-5" />
          <h2 className="font-weight-bold">Beli Rank</h2>
          <h6 className="text-muted">
            Untuk membeli rank silahkan klik{" "}
            <img
              width="35px"
              src="https://discordapp.com/assets/63228fcdf74039fa92cb1188586fa030.svg"
              alt=""
            />{" "}
            Di Channel Server Support
          </h6>
        </section>
        <hr className="mb-5 mt-3 "></hr>
        <h6 className="align-self-center">
          <a href={data.discordLinks}>Klik untuk masuk Discord</a>
        </h6>
      </div>
    </Zoom>
  </Popup>
);
