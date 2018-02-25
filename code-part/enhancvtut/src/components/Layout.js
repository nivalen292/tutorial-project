import React, { Component } from 'react';

import TutorialBar from './TutorialBar';
import CV from './CV';
import Nav from './Nav';

import '../styles/Layout.css';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      title: '5 quick steps to Enhancv. First, enter your name.',
      subTitle: '',
      elements: {},
      barPercent: 0,
      nextButtonDisplay: 'none',
      position: '',
      positionRef: null,
      changePositionButtonDisplay: '',
      closeButtonDisplay: '',
      tutorialDisplay: 'block'
    }
  }

  determineTitle(className) {
    const state = this.state;
    if (className === 'name-input') {
      state.title = 'Well done! Select "Next" to continue.';
    }
    else if (className === 'position-input') {
      state.title = 'Now type the roll you are applying for';
      state.subTitle = 'E.g. Senior Web Developer, Product Marketing Manager, CEO, Director of Finance, Retail Manager';
    }
    else if (className === 'Aposition-input') {
      state.title = 'Enter a specific role. It helps us personalize your resume template to it.';
      state.subTitle = 'E.g. Senior Web Developer, Product Marketing Manager, CEO, Director of Finance, Retail Manager';
    }
    else if (className === 'overlook') {
      state.title = `Great your resume is now tailored for a ${this.state.position} position.`;
      state.subTitle = 'This is not the role you are applying for?';
      state.closeButtonDisplay = 'block';
    }
    this.setState(state);
  }

  addNext(className) {
    const state = this.state;
    state.elements[className] = 'block';
    this.setState(state);
  }

  increasePercent() {
    const state = this.state;
    if (state.barPercent <= 80) {
      state.barPercent += 20;
    }
    this.setState(state);
  }

  makeNextButtonVisible() {
    const state = this.state;
    state.nextButtonDisplay = 'block';
    this.setState(state);
  }

  makeNextButtonInvisible() {
    const state = this.state;
    state.nextButtonDisplay = 'none';
    this.setState(state);
  }

  setPosition(position) {
    const state = this.state;
    state.position = position;
    this.setState(state);
  }

  getPositionRef(ref) {
    const state = this.state;
    state.positionRef = ref;
    this.setState(state);
  }

  allowPositionChange() {
    const state = this.state;
    state.changePositionButtonDisplay = 'block';
    this.setState(state);
  }

  triggetPositionFocus() {
    const state = this.state;
    state.barPercent -= 20;
    state.changePositionButtonDisplay = '';
    this.setState(state);
    CV.focusPosition(this.state.positionRef);
    this.determineTitle('Aposition-input');
  }

  close() {
    const state = this.state;
    state.tutorialDisplay = '';
    this.setState(state);
  }

  render() {
    return (
      <div className="Layout">
        <Nav barPercent={this.state.barPercent}></Nav>
        <CV determineTitle={this.determineTitle.bind(this)} elements={this.state.elements}
          makeNextButtonVisible={this.makeNextButtonVisible.bind(this)}
          setPosition={this.setPosition.bind(this)} getPositionRef={this.getPositionRef.bind(this)}></CV>
        <TutorialBar title={this.state.title} subTitle={this.state.subTitle} addNext={this.addNext.bind(this)}
          increasePercent={this.increasePercent.bind(this)} determineTitle={this.determineTitle.bind(this)}
          nextButtonDisplay={this.state.nextButtonDisplay} makeNextButtonInvisible={this.makeNextButtonInvisible.bind(this)}
          triggetPositionFocus={this.triggetPositionFocus.bind(this)} changePositionButtonDisplay={this.state.changePositionButtonDisplay}
          allowPositionChange={this.allowPositionChange.bind(this)} closeButtonDisplay={this.state.closeButtonDisplay} 
          close={this.close.bind(this)} tutorialDisplay={this.state.tutorialDisplay}></TutorialBar>
      </div>
    );
  }
}

export default Layout;