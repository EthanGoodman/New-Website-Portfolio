import React from 'react';

/* Programming Languages */
import pythonLogo from '../assets/images/python-logo.png';
import javaLogo from '../assets/images/skill-java.png';
import cLogo from '../assets/images/skill-c.png';
import htmlLogo from '../assets/images/skill-html.png';
import cssLogo from '../assets/images/skill-css.png';

/* Backend & Technologies */
import webapisLogo from '../assets/images/skill-rest.png';
import eclipseLogo from '../assets/images/skill-eclipse.png';
import GitHubIcon from '@mui/icons-material/GitHub';

import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faDocker, faFigma } from '@fortawesome/free-brands-svg-icons';

import { SiMysql } from 'react-icons/si';

import ApiIcon from '@mui/icons-material/Api';


/* Updated SCSS file with scoped styling for Skills only */
import '../assets/styles/Skills.scss';

function Skills() {
  return (
    <div className="skills-page" id="skills">
      <h1>Skills & Expertise</h1>
      
      {/* Programming Languages */}
      <div className="skill-section">
        <h2>Programming Languages</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img src={pythonLogo} alt="Python Logo" />
            <span className="skill-text">Python</span>
          </div>
          <div className="skill-item">
            <img src={javaLogo} alt="Java Logo" />
            <span className="skill-text">Java</span>
          </div>
          <div className="skill-item">
            <img src={cLogo} alt="C Logo" />
            <span className="skill-text">C</span>
          </div>
          <div className="skill-item">
            <img src={htmlLogo} alt="HTML Logo" />
            <span className="skill-text">HTML</span>
          </div>
          <div className="skill-item">
            <img src={cssLogo} alt="CSS Logo" />
            <span className="skill-text">CSS</span>
          </div>
        </div>
      </div>
      
      {/* Backend & Technologies */}
      <div className="skill-section">
        <h2>Backend & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FontAwesomeIcon icon={faGitAlt} size="4x"/>
            <span className="skill-text">Git</span>
          </div>
          <div className="skill-item">
            <GitHubIcon sx={{ fontSize: 80 }} />
            <span className="skill-text">GitHub</span>
          </div>
          <div className="skill-item">
            <ApiIcon style={{ fontSize: "75px", color: "#fff" }} />
            <span className="skill-text">APIs</span>
          </div>
          <div className="skill-item">
            <SiMysql style={{ fontSize: "75px", color: "#fff" }} />
            <span className="skill-text">MySQL</span>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faDocker} size="4x"/>
            <span className="skill-text">Docker</span>
          </div>
          <div className="skill-item">
            <img src={eclipseLogo} alt="Eclipse Logo" />
            <span className="skill-text">Eclipse</span>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faFigma} size="4x"/>
            <span className="skill-text">Figma</span>
          </div>
        </div>
      </div>
      
      {/* Software Engineering Practices */}
      <div className="skill-section">
        <h2>Software Engineering</h2>
        <div className="skills-grid">
          <div className="skill-bubble">Agile Methodology</div>
          <div className="skill-bubble">CI/CD Pipelines</div>
          <div className="skill-bubble">Test Driven Development</div>
          <div className="skill-bubble">Software Testing</div>
        </div>
      </div>
      
      {/* Machine Learning & Data Analysis */}
      <div className="skill-section">
        <h2>Machine Learning &amp; Data Analysis</h2>
        <div className="skills-grid">
          <div className="skill-bubble">Machine Learning</div>
          <div className="skill-bubble">Data Analysis</div>
          <div className="skill-bubble">Data Scraping</div>
          <div className="skill-bubble">NumPy</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
