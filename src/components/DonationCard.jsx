import React from "react";
import DonationPopup from "./DonationPopup";
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
          <li className="mb-3">
            Prefix :{" "}
            <span className={`${color + " font-weight-bold"}`}>
              [{props.prefix}]
            </span>
          </li>
          {props.perks.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </section>

      <section className="ml-3 mb-3 mt-3">
        <h5>
          IDR. {props.price}
          <span className="text-muted font-weight-lighter">/Permanent</span>
        </h5>
      </section>
      <DonationPopup />
    </div>
  );
}
