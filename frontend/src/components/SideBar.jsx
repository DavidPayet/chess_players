import React from "react";

import './SideBar.scss'

class SideBav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "250px" : "0" }

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} className="open-nav">
          &#9776;
        </span>
        <div
          onClick={this.navCoverClick}
          className="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <button onClick={this.closeNavClick} className="close-nav">
            &#9776;
          </button>
          <a href="/chess-masters">Home</a>
          <a href="/add-player">Add a player</a>
          <a href="/">Log out</a>
          <a href="mailto:davidpayet570@gmail.com">Contact me</a>
          <a href="https://github.com/DavidPayet" target="_blank" rel="noopener noreferrer">
            <img src="/medias/github-icon.png" className="github-icon" alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/david-payet/" target="_blank" rel="noopener noreferrer">
            <img src="/medias/linkedin-icon.png" className="linkedin-icon" alt="Linkein icon"></img>
          </a>
          <p className="footer">©Copyright 2019-All right reserved. <a className="portfolio-link" href="https://davidpayet-portfolio.netlify.com">davidpayet-portfolio.netlify.com</a></p>
        </div>
        <div>

        </div>
      </React.Fragment>
    )
  }
}

export default SideBav