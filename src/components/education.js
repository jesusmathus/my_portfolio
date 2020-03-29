import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4} style={{paddingBottom: '5em'}}>
          <div className="mit-logo">
            <img src={this.props.image} className="mit-logo-image" alt="school-logo"/>
          </div>
        </Cell>
        <Cell col={6} style={{paddingBottom: '5em'}}>
          <div className="mit-details">
            <div className="mit-name">{this.props.school}</div>
            <div className="mit-role">{this.props.degree}</div>
            <span className="mit-city">{this.props.city}</span><span className="mit-separator-symbol">|</span><span className="mit-time">{this.props.time}</span>
            <div className="mit-blurb">
              {this.props.blurb}
            </div>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
