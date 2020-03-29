import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex', fontFamily: 'Lato', fontWeight: '1000', paddingLeft: '7em'}}>
            {this.props.skill} <ProgressBar style={{marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', marginRight: '8em', width: '75%'}} progress={this.props.progress}/>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
