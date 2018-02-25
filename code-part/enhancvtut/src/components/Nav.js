import React, { Component } from 'react';

import '../styles/Nav.css';

class Nav extends Component {

  render() {
    return (
      <nav className="Nav">
        <div className="logo">
          <img src={require('../images/cv-logo.png')} />
        </div>
        <div className="progress-bar">
          <div className="bar-container">
            <h4 className="text-center">Progress</h4>
            <div id="myProgress">
              <div id="myBar" style={{width: this.props.barPercent + '%'}}></div>
            </div>
          </div>
        </div>
        <button className="sign-in">Sign in</button>
      </nav>
    );
  }
}

export default Nav;