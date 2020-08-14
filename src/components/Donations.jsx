import React from "react";
import DonationCard from "./DonationCard";
import Fade from "react-reveal/Fade";
import Countdown from "react-countdown";
export default function Donations(props) {
  const data = props.props;
  return (
    <section id="donations" className="container mt-3 mb-5 ds">
      <div className="row">
        <div className="col-xs-12">
          <Fade top delay={1000}>
            <h2 className="text-uppercase text-center font-weight-bold">
              {data.langDonations}
            </h2>
          </Fade>
          <Fade top delay={1200}>
            <h5 className="text-muted text-center d">
              {data.langDonationsDescription}
            </h5>
          </Fade>
          <hr></hr>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12">
          <h1 className="text-center text-danger">25% OFF</h1>
          <h5 className="text-center text-muted">
            {data.langDonationsDiscountMessage}
          </h5>
          <div className="row aos-init aos-animate" data-aos="zoom-in">
            {data.donations.map((e, index) => {
              return (
                <div key={index} className="col-md-4">
                  <DonationCard
                    prefix={e.prefix}
                    description={e.description}
                    price={e.price}
                    perks={e.perks}
                    color={e.prefixColor}
                    discount={e.discount}
                    inDiscount={e.inDiscount}
                  />
                </div>
              );
            })}
            <h1 className="text-center font-weight-bold text-danger mt-5 mb-1">
              TIME :{" "}
              <Countdown date={data.donationsDiscountDays}>
                <div>
                  <h1>Countdown Completed</h1>
                </div>
              </Countdown>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
