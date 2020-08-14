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
import data from "./data";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serverStatus: null,
      playerCount: 0,
    };
  }

  componentDidMount() {
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
    return (
      <>
        <Navbar props={data} />

        <Home
          props={data}
          status={this.state.serverStatus}
          count={this.state.playerCount}
        />

        <About props={data} />

        <Donations props={data} />

        <Vote props={data} />

        <Gamemode props={data} />

        <Social props={data} />

        <Footer props={data} />
      </>
    );
  }
}

export default App;
