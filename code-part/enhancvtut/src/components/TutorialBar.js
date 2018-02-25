import React, { Component } from 'react';

import '../styles/TutorialBar.css';

class TutorialBar extends Component {
  
  constructor(){
    super();
    let spanText;
  }

  nextClick() {
    if (this.props.title === 'Well done! Select "Next" to continue.') {
      this.props.addNext('position-input');
      this.props.determineTitle('position-input');
      this.props.makeNextButtonInvisible();
    }
    else if (this.props.title === 'Enter a specific role. It helps us personalize your resume template to it.') {
      this.props.determineTitle('overlook')
      this.spanText = 'Change Next Desired Role';
      this.props.allowPositionChange();
    }
    this.props.increasePercent();
  }

  render() {
    return (
      <section className="TutorialBar" style={{display: this.props.tutorialDisplay ? 'block' : 'none'}}>
        <div className="container">
          <div className="caption">
            <img className="close-button" src={require('../images/X.png')} style={{display: this.props.closeButtonDisplay ? 'block' : 'none'}}
              onClick={this.props.close}/>
            <h3 className="text-center">{this.props.title}</h3>
            <h4 className="text-center subtitle">{this.props.subTitle} <span ref="changePositionButton" 
              onClick={this.props.triggetPositionFocus.bind(this)} style={{display: this.props.changePositionButtonDisplay ? 'inline-block' : 'none'}}>{this.spanText}</span></h4>
            <button onClick={this.nextClick.bind(this)} style={{display: this.props.nextButtonDisplay}}>Next</button>
          </div>
        </div>
      </section>
    );
  }
}

export default TutorialBar;