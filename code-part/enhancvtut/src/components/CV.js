import React, { Component } from 'react';

import '../styles/CV.css';

class CV extends Component {

  handleChange(e) {
    if (e.target.className === 'name-input') {
      this.props.determineTitle(e.target.className);
    }
    else if (e.target.className === 'position-input') {
      this.props.determineTitle('Aposition-input');
      this.props.setPosition(this.refs.position.value);
    }

    // make next button visible
    this.props.makeNextButtonVisible();
    this.props.getPositionRef(this.refs.position);
  }

  static focusPosition(ref) {
    ref.value = '';
    ref.focus();
  }

  render() {
    return (
      <div className="CV">
        <section className="inner">

          <header>
            <div>
              <input type="text"
                className="name-input" placeholder="YOUR NAME"
                onBlur={this.handleChange.bind(this)} />
              <input type="text"
                className="position-input" style={{ display: this.props.elements['position-input'] ? this.props.elements['position-input'] : 'none' }}
                placeholder="Your next desired role?" ref="position"
                onBlur={this.handleChange.bind(this)} /*onKeyPress={this.handleChange.bind(this)}*/ />
            </div>
            <div className="image-holder"></div>
          </header>

          <section className="details">
            <div className="left-side">
              <div className="title-holder"></div>
              <div className="separator"></div>

              <div className="achievements">
                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>

                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>
              </div>

              <div className="title-holder"></div>
              <div className="separator"></div>

              <div className="achievements">
                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>

                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="title-holder"></div>
              <div className="separator"></div>

              <div className="achievements">
                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>

                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>
              </div>

              <div className="title-holder"></div>
              <div className="separator"></div>

              <div className="achievements">
                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>

                <div className="achievement">
                  <div className="achievement-icon"></div>
                  <div>
                    <div className="title-holder"></div>
                    <div className="title-holder"></div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default CV;