import React from "react";

export default function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex" href="#home">
          <h3 className="font-weight-bold text-uppercase text-info"> {props.title}</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                {props.langHome}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {props.langAbout}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#donations">
                {props.langDonations}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vote">
                {props.langVote}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={props.forumLinks}>
                {props.langForum}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#games">
                {props.langGames}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
