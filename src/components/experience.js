import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4} style={{paddingBottom: '5em'}}>
          <div className="experience-logo">
            <img src={this.props.image} className="company-logo-image" alt="company-logo"/>
          </div>
        </Cell>
        <Cell col={6} style={{paddingBottom: '5em'}}>
          <div className="experience-details">
            <div className="company-name">{this.props.company}</div>
            <div className="company-role">{this.props.role}</div>
            <span className="company-city">{this.props.city}</span><span className="company-separator-symbol">|</span><span className="company-time">{this.props.time}</span>
            <div className="company-blurb">
              {this.props.blurb}
            </div>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
