import React from "react";
import GameCardEven from "./GamecardEven";
import GameCardOdd from "./GamecardOdd";
import Fade from "react-reveal/Fade";
export default function Gamemode(props) {
  const data = props.props;
  return (
    <section id="games" className="container mt-3 mb-5 ">
      <div className="row">
        <div className="col-xs-12">
          <Fade delay={1000}>
            <h2 className="text-uppercase text-center font-weight-bold">
              {data.langMostGames}
            </h2>
          </Fade>
          <Fade delay={1200}>
            <h5 className="text-muted text-center">
              {data.langMostGamesDescription}
            </h5>
          </Fade>
          <hr></hr>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-xs-12">
          {data.games.map((e, index) => {
            if (index % 2 === 0) {
              return (
                <Fade key={index}left delay={1250 + index * 120}>
                  <GameCardOdd
                    name={e.name}
                    description={e.description}
                    subtitle={e.subtitle}
                    image={e.image}
                  />
                </Fade>
              );
            } else {
              return (
                <Fade right delay={1300 + index * 100}>
                  <GameCardEven
                    name={e.name}
                    description={e.description}
                    subtitle={e.subtitle}
                    image={e.image}
                  />
                </Fade>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
