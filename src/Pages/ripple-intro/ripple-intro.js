import React, { Component } from 'react'
import logo from '../ripple-intro/logo.svg';
import './ripple-intro.css';



export default class RippleIntro extends Component {
  render() {
    return (
      <div className="Intro">
            <header className="Intro-header">
                <img src={logo} className="Intro-logo" alt="logo" />
                <p>Ripple Business Proposal App - Introducton Page 
                    <a className="Intro-link" href="#" target="_blank" rel="noopener noreferrer"> start here.</a>
                </p>
            </header>
        </div>
    )
  }
}
