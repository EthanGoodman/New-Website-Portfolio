import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Project Planning",
    "Data Scraping",
];

const labelsSecond = [
    "Python",
    "Git",
    "API's",
    "Docker",
    "MySQL",
    "Cron",
    "Linux",
];

const labelsThird = [
    "To be determined!"
]
function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Incoming Full Stack Dev Intern @WingSwept</h3>
                    <p>I am an incoming Full Stack Web Developer at WingSwept where I will be working with their application development team. Here, I will 
                        be responsible for requirements collection, web and database development, testing and quality assurance, data entry, architecture 
                        recommendations, maintenance, documentation, and investiagting new technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning Undergraduate Researcher</h3>
                    <p>
                        • Developing AI/ML model with a colleague to detect wheel spinning in SimStudent users using 20 years of data with 2000+ students. 
                        <br></br>• Utilizing a logistical regression model and Bayesian Knowledge Tracing to detect student wheel spinning.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cyber Security Research Assistant</h3>
                    <p>
                        • Developed a strong understanding of threat intelligence by working on enhancing MISP, an open-source platform for centralizing security data.
                        <br></br>• Gained experience in collaborative software engineering by frequently working with another researcher in the WSPR Lab to optimize the Threat Intelligence Database.
                        <br></br>• Strengthened skills in automation by improving functionality and streamlining processes for potential users.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;