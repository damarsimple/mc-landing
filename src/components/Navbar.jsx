import React from "react";

export default function Navbar(props) {
  const data = props.props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex" href="#home">
          <h3 className="font-weight-bold text-uppercase text-info"> {data.title}</h3>
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
                {data.langHome}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {data.langAbout}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#donations">
                {data.langDonations}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vote">
                {data.langVote}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={data.forumLinks}>
                {data.langForum}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#games">
                {data.langGames}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
