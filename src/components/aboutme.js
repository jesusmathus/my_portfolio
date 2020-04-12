import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    try {
      if (window.innerWidth > 1024) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
      if (window.innerWidth < 1025 && (document.getElementsByClassName("material-icons")[0].style.color === "white")) {
        document.getElementsByClassName("material-icons")[0].style.color = "rgba(0, 0, 0, 0.5)";
      }
    } catch(e) { }
  }

  checkSize() {
    try {
      if (window.innerWidth > 1024) {
        document.getElementsByClassName("material-icons")[0].style.color = "white";
      }
      if (window.innerWidth < 1025 && (document.getElementsByClassName("material-icons")[0].style.color === "white")) {
        document.getElementsByClassName("material-icons")[0].style.color = "rgba(0, 0, 0, 0.5)";
      }
    } catch(e) { }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  render() {
    return(
      <div className="about-me-body">
        <Grid className="about-me-grid">
          <Cell col={8}>
            <h2>Jesús Mathus</h2>
            <img src="/Jesus_Mathus_Headshot.jpg" alt="headshot" style={{height: '300px', borderRadius: '50%', border: '1px solid #333333'}}/>
            <p style={{width: '85%', margin: 'auto', paddingTop: '1em'}}>Hi, my name is Jesús. I graduated from MIT with a bachelor's and master's degree in
            computer science. I now work full time as a cybersecurity consultant for McKinsey out of their New York office. I'm a full stack developer and
            I've worked on projects in a number of different languages, including Python, Java, Golang, Node.js, Express.js, and React. Please feel free to continue
            looking through the site to learn more about my professional background or to contact me if you'd like to get in touch.</p>
          </Cell>
          <Cell col={4}>
            <h2>Learn More</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  {/* LinkedIn */}
                  <ListItemContent className="about-me-list-item">
                    <a href="https://www.linkedin.com/in/jesus-mathus-aa8a74146/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    <p style={{display: 'table-cell', verticalAlign: 'middle'}}>Message me on LinkedIn</p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  {/* Facebook */}
                  <ListItemContent className="about-me-list-item">
                    <a href="https://www.facebook.com/jesus.mathus.3" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-facebook-square" aria-hidden="true"/>
                    </a>
                    <p style={{display: 'table-cell', verticalAlign: 'middle'}}>Message me on Facebook</p>
                  </ListItemContent>
                </ListItem >
                <ListItem>
                  {/* Github */}
                  <ListItemContent className="about-me-list-item">
                    <a href="https://github.com/jesusmathus" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                    <p style={{display: 'table-cell', verticalAlign: 'middle'}}>Take a look at my Github</p>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  {/* Master's Thesis */}
                  <ListItemContent className="about-me-list-item">
                    <a href="https://dspace.mit.edu/handle/1721.1/119736" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-book" aria-hidden="true"/>
                    </a>
                    <p style={{display: 'table-cell', verticalAlign: 'middle'}}>Check out my master's thesis</p>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
