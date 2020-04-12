import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
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
      <div>
        <Grid>
          <Cell col={12} className="resume-right-col">
            <h2 style={{fontFamily: 'Lato', fontWeight: 'bold', paddingLeft: '0.5em'}}>Education</h2>
            <hr style={{borderTop: '2px solid #333333', width: '100%', margin: 'auto', paddingBottom: '10vh'}}/>
            {/* MIT Master's Degree*/}
            <Education
              image="/MIT_Logo.png"
              school="Massachusetts Institute of Technology"
              degree="Master's of Computer Science"
              city="Cambridge, MA"
              time="June 2017 - June 2018"
              blurb="I studied computer science and took classes like computer systems security, probability and random variables, and entrepreneurship in engineering to name a few."
            />
            {/* MIT Bachelor's Degree */}
            <Education
              image="/MIT_Logo.png"
              school="Massachusetts Institute of Technology"
              degree="Bachelor of Computer Science"
              city="Cambridge, MA"
              time="September 2013 - June 2017"
              blurb="I studied computer science and took classes like advanced algorithms, computer system engineering, and user interface design and implementation to name a few."
            />



            <h2 style={{fontFamily: 'Lato', fontWeight: 'bold', paddingLeft: '0.5em'}}>Experience</h2>
            <hr style={{borderTop: '2px solid #333333', width: '100%', margin: 'auto', paddingBottom: '10vh'}}/>
            {/* McKinsey */}
            <Experience
              image="/McKinseyLogo.png"
              company="McKinsey & Co."
              role="Cybersecurity Analyst"
              city="New York, NY"
              time="September 2018 - Present"
              blurb="As a cybersecurity consultant, I assist clients across industries to identify, understand, and manage their cyber risk, focusing on strategy and transformation. Most recently, I supported bilingual Latin America efforts, helping over seven C-suite members make more informed cyber decisions based on my team's expert input."
            />
            {/* Draper */}
            <Experience
              image="/Draper_Logo.png"
              company="Draper"
              role="Fellow"
              city="Cambridge, MA"
              time="June 2017 - June 2018"
              blurb="As a part of my master's thesis work, I programmed peer to peer cross-chain exchange capabilities on the MIT Digital Currency Initiative's implementation of the Lightning Network. As a result, I wrote a 64-page thesis outlining the code I added to the Digital Currency Initiative’s Lightning Network implementation."
            />
            {/* MIT UROP */}
            <Experience
              image="/MIT_Logo.png"
              company="MIT Media Lab"
              role="Undergraduate Blockchain Researcher"
              city="Cambridge"
              time="February 2017 - June 2017"
              blurb="As an undergraduate researcher, I helped to designed an application using blockchain technology to provide a reliable asset registry system for the Mexican Government. I helped present our initial system prototype to the Inter-American Development Bank to receive a grant for further development."
            />
            {/* Goldman Sachs */}
            <Experience
              image="/Goldman_Logo.png"
              company="Goldman Sachs"
              role="Summer Analyst for the PWM Technology Division"
              city="New York, NY"
              time="June 2016 - August 2016"
              blurb="As a summer analyst, I developed a record linkage algorithm, detecting correlations between 93.8% of data in daily transaction files and the central database data; additionally, I implemented a user interface to more effectively present my results to the 2 heads of the division."
            />
            {/* Morgan Stanley */}
            <Experience
              image="/Morgan_Stanley_Logo.jpg"
              company="Morgan Stanley"
              role="Winter Analyst for the Fixed Income Trading Division"
              city="New York, NY"
              time="January 2016 - January 2016"
              blurb="Constructed an amortization schedule and effectively debugged code for a schedule constructor program in the SPG division. Synthesized information from market briefing meetings and relayed the essential details to expert traders on my desk."
            />
            {/* Sysco */}
            <Experience
              image="/Sysco_Logo.png"
              company="Sysco"
              role="Business Analyst for the Business Technology Department"
              city="Houston, TX"
              time="July 2015 - August 2015"
              blurb="Analyzed large data sets and derived information supporting initiatives to improve the 425,000 customers’ digital experience."
            />



            <h2 style={{fontFamily: 'Lato', fontWeight: 'bold', paddingLeft: '0.5em'}}>Skills</h2>
            <hr style={{borderTop: '2px solid #333333', width: '100%', margin: 'auto', paddingBottom: '5vh'}}/>
            <Skills
              skill="Python"
              progress={90}
            />
            <Skills
              skill="Java"
              progress={90}
            />
            <Skills
              skill="Javascript"
              progress={85}
            />
            <Skills
              skill="Golang"
              progress={80}
            />
            <Skills
              skill="React"
              progress={50}
            />
            <Skills
              skill="Node.js"
              progress={50}
            />
            <Skills
              skill="Express"
              progress={35}
            />
            <Skills
              skill="MongoDB"
              progress={20}
            />
            <Skills
              skill="PostgreSQL"
              progress={20}
            />
            <Skills
              skill="Swift"
              progress={10}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
