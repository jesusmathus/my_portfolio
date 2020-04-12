import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link }  from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google';

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
    if (window.innerWidth < 1025 && (window.location.pathname === "/" || window.location.pathname === "/contact")) {
      document.getElementsByClassName("material-icons")[0].style.color = "white";
    }
  }

  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="navbar" title={<Link to="/" style={{color: 'white', textDecoration: 'none'}}>JM Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/aboutme" className="navbar-about-me">About Me</Link>
                  <Link to="/resume" className="navbar-resume">Resume</Link>
                  <Link to="/projects" className="navbar-projects">Projects</Link>
                  <Link to="/contact" className="navbar-contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link to="/" style={{color: '#666666', textDecoration: 'none'}}>JM Portfolio</Link>}>
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
      </div>
    )
  }
}

export default App;
