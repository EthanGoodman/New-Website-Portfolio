import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import headshot from '../assets/images/headshot.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Headshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/EthanGoodman" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ethan-goodman-ecg/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ethan Goodman</h1>
          <p>Full Stack Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/EthanGoodman" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ethan-goodman-ecg/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;