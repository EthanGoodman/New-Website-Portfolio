import sentiment from '../assets/images/portfolio-sentiment.png';
import simstudent from '../assets/images/portfolio-simstudent.png'
import imghere from '../assets/images/portfolio-img-here.png'
import threatintel from '../assets/images/portfolio-threat-intell.png'
import os from '../assets/images/portfolio-os.png'
import c from '../assets/images/portfolio-c.png'
import scheduler from '../assets/images/portfolio-scheduler.png'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/* This is example if I want to add a link to github or project page from clicking an image*/}
                {/* <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <img src={sentiment} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Twitter Sentiment Stock Price Predictor</h2></a>
                <p>
                    • My team and I analyzed historical stock price data and Twitter sentiment for companies like Netflix, Tesla, Google, Meta, AMD, and more. Examining a variety of predictive models, 
                    we analyzed whether including sentiment scores improved prediction accuracy for short-term stock price movements.
                    <br></br>• This work culminated in a formal research paper, which includes our methodology, findings, and implications for both data science and financial forecasting.
                </p>
            </div>
            <div className="project">
                <img src={simstudent} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>SimStudent WheelSpinning Detector</h2></a>
                <p>
                    • Developing AI/ML model with a colleague to detect wheel spinning in SimStudent users using 20 years of data with 2000+ students.
                    <br></br>• Utilizing a logistical regression model and Bayesian Knowledge Tracing to detect student wheel spinning.
                </p>
            </div>
            <div className="project">
                <img src={threatintel} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>SafeWolf - Threat Intelligence Database</h2></a>
                <p>
                    • Leveraged Python and Docker to enhance and extend the capabilities of an open-source project, integrating custom modules that can enrich MISP events with over 1,000,000 attributes.
                    <br></br>• Optimized MySQL configurations, resulting in an improvement in database performance.
                    <br></br>• Seamlessly integrated 1,000,000+ data entries from internal and external feeds into MISP, significantly enhancing and expanding the Threat Intelligence Database
                </p>
            </div>
            <div className="project">
                <img src={imghere} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>WolfCafe - Software Engineering Project</h2></a>
                <p>
                    • Developed a coffee maker application in collaboration with multiple teams.
                    <br></br>• Implemented frontend and backend functionality using Java, HTML, JavaScript, and REST API, enhancing user experience and system efficiency.
                    <br></br>• Utilized Git for version control, maintaining code quality, collaboration, and project integrity.
                </p>
            </div>
            <div className="project">
                <img src={scheduler} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>PackSheduler - Software Development Project</h2></a>
                <p>
                    • Collaborated with many teams throughout the semester in developing a scheduler for school.
                    <br></br>• Leveraged unit testing and system testing to ensure the quality of the project.
                    <br></br>• Implemented multiple custom data structures to more fit our personal needs
                    <br></br>• Used the Model View Controller (MVC) pattern to enhance usability.
                </p>
            </div>
            <div className="project">
                <img src={os} className="zoom" alt="thumbnail" width="100%"/>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Operating Systems Portfolio</h2></a>
                <p>
                    • Designed and implemented a custom shell interpreter with built-in command execution
                    <br></br>• Developed multi-threaded client-server applications, ensuring efficient communication and concurrency.
                    <br></br>• Implemented encrypted client-server communication for secure data transfer.
                    <br></br>• Analyzed and resolved deadlock scenarios in multi-threaded applications to improve system performance.
                </p>
            </div>
            <div className="project">
                <img src={c} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>C Portfolio</h2></a>
                <p>
                    • Developed 5 projects including a Madlib Generator, Base 20 to Base 10 Converter, Record Store Application, Custom File Hashing Algorithm, 
                    and Map Modifier Tool; utilizing data processing, security, and application design.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;