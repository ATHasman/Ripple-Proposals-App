import React, { Component } from 'react'
import logo from '../ripple-intro/logo.svg';
import './ripple-intro.css';



export default class RippleIntro extends Component {
  render() {
    return (
      <div className="Intro">
      <header className="Intro-header">
        <p>
        <img src={logo} className="Intro-logo" alt="logo" />
        Ripple Business Proposal App - Introducton Page
        </p>
        <a className="Intro-link" href="#" target="_blank" rel="noopener noreferrer" >Start Here.</a>
      </header>
    </div>
    )
  }
}
