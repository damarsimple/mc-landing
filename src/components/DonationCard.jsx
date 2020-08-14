import React from "react";
import DonationPopup from "./DonationPopup";
import NumberFormat from "react-number-format";
import Popup from "reactjs-popup";
export default function DonationCard(props) {
  let color = "";
  switch (props.color) {
    case "red":
      color = "text-danger";
      break;
    case "blue":
      color = "text-info";
      break;
    case "yellow":
      color = "text-warning";
      break;
    default:
      color = "text-muted";
      break;
  }
  return (
    <div className="card p-3 shadow rounded">
      <section>
        <h2 className="font-weight-bold">{props.prefix}</h2>
        <h6 className="text-muted">{props.description}</h6>
      </section>
      <hr className="mb-5 mt-3"></hr>
      <section>
        <ul style={{ listStyleType: "none" }}>
          <li key={0} className="mb-3">
            Prefix :{" "}
            <span className={`${color + " font-weight-bold"}`}>
              [{props.prefix}]
            </span>
            <br />
            <Popup
              modal
              closeOnDocumentClick
              trigger={
                <button className="btn btn-primary mt-3 mb-3">
                  Perks List
                </button>
              }
            >
              {props.perks.map((e, index) => (
                <li key={index + 1} className="m-2">
                  {e}
                </li>
              ))}
            </Popup>
          </li>
        </ul>
      </section>

      <section className="ml-3 mb-3 mt-3">
        {props.inDiscount ? (
          <h6>
            IDR.{" "}
            <del>
              <NumberFormat
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
              />
            </del>
          </h6>
        ) : null}
        <h3>
          <NumberFormat
            value={props.price - props.price * props.discount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"IDR. "}
          />
          <span className="text-muted font-weight-lighter">/Permanent</span>
        </h3>
      </section>
      <DonationPopup />
    </div>
  );
}
// {props.perks.map((e) => (
//   <li>{e}</li>
// ))}
