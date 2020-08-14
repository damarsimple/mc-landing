import React from "react";
import InstagramCard from "./InstagramCard.jsx";
import DiscordCard from "./DiscordCard.jsx";
import Fade from "react-reveal/Fade";
export default function Social(props) {
  const data = props.props;
  return (
    <section className="container mt-3 mb-5 ">
      <div className="row">
        <div className="col-xs-12">
          <Fade top delay={1000}>
            <h2 className="text-uppercase text-center font-weight-bold">
              {data.langFollowInsta}
            </h2>
          </Fade>
          <Fade top delay={1100}>
            <h5 className="text-muted text-center">
              {data.langSocialDescription}
            </h5>
          </Fade>
          <Fade right delay={1200}>
            <hr></hr>
          </Fade>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12">
          <div className="row">
            <Fade left delay={100}>
              <div className="col-md-6">
                <InstagramCard description={data.langFollowInsta} links={data.instagramLinks}/>
              </div>
            </Fade>
            <Fade right delay={200}>
              <div className="col-md-6">
                <DiscordCard description={data.langJoinDiscord} links={data.discordLinks}/>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
