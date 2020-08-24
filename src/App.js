import React from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Donations from "./components/Donations";
import Vote from "./components/Vote";
import Gamemode from "./components/Gamemode";
import Social from "./components/Social";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverStatus: null,
      playerCount: 0,

      data: {},
    };
  }

  componentDidMount() {
    fetch("/data.json").then((response) => {
      response.json().then((data) => {
        console.log(data.discordLinks);
        this.setState({ data: data });
      });
    });
    fetch("https://api.mcsrvstat.us/2/mc.galaxivale.net")
      .then((response) => response.json())
      .then((data) => {
        if (data.debug.ping) {
          this.setState({ playerCount: data.players.online });
        }
        this.setState({ serverStatus: data.debug.ping });
      });
  }
  render() {
    const data = this.state.data;
    return (
      <>
        <Navbar
          title={data.title}
          langHome={data.langHome}
          langAbout={data.langAbout}
          langDonations={data.langDonations}
          langVote={data.langVote}
          langForum={data.langForum}
          langGames={data.langGames}
          forumLinks={data.forumLinks}
        />

        <Home
          status={this.state.serverStatus}
          count={this.state.playerCount}
          title={data.title}
          logo={data.logo}
          langCurrentlyPlaying={data.langCurrentlyPlaying}
          langServerOffline={data.langServerOffline}
          registerLinks={data.registerLinks}
          langJoin={data.langJoin}
        />

        <About
          langAboutUs={data.langAboutUs}
          langAboutUsSubtitle={data.langAboutUsSubtitle}
          langAboutDescription={data.langAboutDescription}
          langJoin={data.langJoin}
          logo={data.logo}
        />

        <Donations
          langDonations={data.langDonations}
          langDonationsDescription={data.langDonationsDescription}
          langDonationsDiscountMessage={data.langDonationsDiscountMessage}
          donations={data.donations ? data.donations : []}
          donationsDiscountDays={data.donationsDiscountDays}
          inDiscount={data.inDiscount}
        />

        <Vote
          langVote={data.langVote}
          langVoteDescription={data.langVoteDescription}
          langButton1={data.langButton1}
          langButton2={data.langButton2}
          langButton3={data.langButton3}
        />

        <Gamemode
          langMostGames={data.langMostGames}
          langMostGamesDescription={data.langMostGamesDescription}
          games={data.games ? data.games : []}
        />

        <Social
          langFollowInsta={data.langFollowInsta}
          langSocialDescription={data.langSocialDescription}
          instagramLinks={data.instagramLinks}
          langJoinDiscord={data.langJoinDiscord}
          discordLinks={data.discordLinks}
        />

        <Footer title={data.title} />
      </>
    );
  }
}

export default App;
