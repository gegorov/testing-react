// @flow
import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import coursesMocs from '../data/courses.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: coursesMocs };
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        <div className="navbar-fixed" id="top">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="#top" className="brand-logo center">React</a>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={courses} />
        </div>
      </div>
    );
  }
}
