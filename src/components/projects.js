import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

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

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/04/0408.sdt-news.png) center / cover'}}>
              React Project #1
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/04/0408.sdt-news.png) center / cover'}}>
              React Project #2
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/04/0408.sdt-news.png) center / cover'}}>
              React Project #3
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/04/0408.sdt-news.png) center / cover'}}>
              React Project #4
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2016/04/0408.sdt-news.png) center / cover'}}>
              React Project #5
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPU_P4lrhZNUZNu4up5x8_gP9XJTFpbgiuZl1qWlFuLlczcsz_) center / cover'}}>
              Java Project #1
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPU_P4lrhZNUZNu4up5x8_gP9XJTFpbgiuZl1qWlFuLlczcsz_) center / cover'}}>
              Java Project #2
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPU_P4lrhZNUZNu4up5x8_gP9XJTFpbgiuZl1qWlFuLlczcsz_) center / cover'}}>
              Java Project #3
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPU_P4lrhZNUZNu4up5x8_gP9XJTFpbgiuZl1qWlFuLlczcsz_) center / cover'}}>
              Java Project #4
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPU_P4lrhZNUZNu4up5x8_gP9XJTFpbgiuZl1qWlFuLlczcsz_) center / cover'}}>
              Java Project #5
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pond5.com/abstract-futuristic-electronic-binary-code-footage-087828049_prevstill.jpeg) center / cover'}}>
              Golang Project #1
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pond5.com/abstract-futuristic-electronic-binary-code-footage-087828049_prevstill.jpeg) center / cover'}}>
              Golang Project #2
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pond5.com/abstract-futuristic-electronic-binary-code-footage-087828049_prevstill.jpeg) center / cover'}}>
              Golang Project #3
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pond5.com/abstract-futuristic-electronic-binary-code-footage-087828049_prevstill.jpeg) center / cover'}}>
              Golang Project #4
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pond5.com/abstract-futuristic-electronic-binary-code-footage-087828049_prevstill.jpeg) center / cover'}}>
              Golang Project #5
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover'}}>
              Python Project #1
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover'}}>
              Python Project #2
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover'}}>
              Python Project #3
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover'}}>
              Python Project #4
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin:'auto', marginBottom:'2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/3960/1*taf9WHc3BPmhbxyKEu2jIg.png) center / cover'}}>
              Python Project #5
            </CardTitle>
            <CardText>
              There should be text here that describes this project at a high-level to provide the reader with context as to what it does.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
          <Tab>React</Tab>
          <Tab>Java</Tab>
          <Tab>Golang</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
