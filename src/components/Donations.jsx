import React from "react";
import DonationCard from "./DonationCard";
import Fade from "react-reveal/Fade";
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Donations(props) {
  return (
    <section id="donations" className="container mt-3 mb-5 ds">
      <div className="row">
        <div className="col-xs-12">
          <Fade top delay={1000}>
            <h2 className="text-uppercase text-center font-weight-bold">
              {props.langDonations}
            </h2>
          </Fade>
          <Fade top delay={1200}>
            <h5 className="text-muted text-center d">
              {props.langDonationsDescription}
            </h5>
          </Fade>
          <hr></hr>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>RANK</Tab>
          <Tab>TAGS</Tab>
          <Tab>JOBS BOOSTS</Tab>
          <Tab>KEYS</Tab>
          <Tab>BATTLEPASS</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
      <div className="row mt-5">
        <div className="col-xs-12">
          <h1 className="text-center text-danger">25% OFF</h1>
          <h5 className="text-center text-muted">
            {props.langDonationsDiscountMessage}
          </h5>
          <div className="row aos-init aos-animate" data-aos="zoom-in">
            {props.donations.map((e, index) => {
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
            {props.donationsDiscountDays < Date.now() ? (
              <h1 className="text-center font-weight-bold text-danger mt-5 mb-1">
                TIME :{" "}
                <Countdown date={props.donationsDiscountDays}>
                  <div>
                    <h1>Countdown Completed</h1>
                  </div>
                </Countdown>
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
