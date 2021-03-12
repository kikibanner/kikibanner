import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from './components/Button';
import Project from './components/Project';
import Navbar from './components/Navbar';

import Resume from './assets/resume.pdf';
import FotoDepan from './assets/me-mono.png';
import FotoBelakang from './assets/me-color.png';
import TADepan from './assets/ta-mono.png';
import TABelakang from './assets/ta-color.png';
import CaptyDepan from './assets/capty-mono.png';
import CaptyBelakang from './assets/capty-color.png';
import LMSDepan from './assets/lms-mono.png';
import LMSBelakang from './assets/lms-color.png';
import Cs from './assets/cs.jpg';


function App() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);
  return (
    <div className="App">
    {/* // Navbar */}
    <Navbar />

    {/* // Header Hero */}
      <div className="hero vh-100 d-flex justify-content-center " >
        <div className="hero-content">
          <h1 className="highlight txt-hero-hi ">Hello! I am</h1>
          <h2 className="main txt-hero-main animate__animated animate__fadeInUp"><b>Rifki Fadillah Akbar,</b></h2>
          <h2 className="sub txt-hero-main animate__animated animate__fadeInUp">I do Coding and Design</h2>
          <p className="sub animate__animated animate__fadeIn animate__delay-1s">
          I am experienced in web development especially in design and frontend.
          <br/> 
          I am also into Machine Learning and Artificial Intelligence.
          <br/> 
          Sometimes I integrate both web and AI.
          </p>
          <Button text="Get My Resume" link={Resume}/>
        </div>
      </div>

      {/* // Static (side icons) */}

      {/* // Main (jeneng, perkenalan singkat, tombol download cv) */}
      <div className="rest">
        {/* // 1. About Me */}
        <div id="about" className="container about-me" data-aos="fade-up">
          <div className="row">
            <div className="col">
              <p className="section-title main"><code className="code">1. </code>About Me</p>
            </div>
          </div>
          <div className="row about-me-caption">
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <p>Hi! I'm Rifki, from East Java, Indonesia.</p>
                  <p>I'm a fresh graduated student from <a className="highlight" href="http://pens.ac.id" target="_blank"> Politeknik Elektronika Negeri Surabaya</a>. I have been experienced with working in web development and programming-related projects when I'm still in college. I enjoy exploring my creativity and make something with code. I am a guy with sheer will and dedication in something I believe it's good for me and the community.</p>
                  <p>Recently, I've been working with these technologies:</p>
                </div>
              </div>
              <div className="row techstacks">
                <div className="col-4">
                  <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML, (S)CSS</li>
                    <li>Node.js</li>
                    <li>ReactJS</li>
                    <li>MongoDB</li>
                    <li>ExpressJS</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <ul>
                      <li>Python</li>
                      <li>Pandas</li>
                      <li>Scikit-Learn</li>
                      <li>Flask</li>
                      <li>Keras API</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="swap-on-hover">
                <img className="swap-on-hover__front-image" src={FotoDepan} alt=""/>
                <img className="wap-on-hover__back-image" src={FotoBelakang} alt=""/>
              </div>
            </div>
          </div>
        </div>

        {/* // 2. Projects */}
        <div id="projects" className="container projects">
          <div className="row">
            <div className="col">
              <p className="section-title main title-project"><code className="code">2. </code>Projects I've Been Working On</p>
            </div>
          </div>
          <Project title="COVID-19 Classification Using SVM Algorithm" 
                    description="A Machine Learning and web-app Integration, detecting patient type based on text 
                    input using Support Vector Machine Algorithm" 
                    stacks="ReactJS; MongoDB; Express; Flask; Scikit-Learn" 
                    imagefront={TADepan} 
                    imageback={TABelakang}
          />
          <div className="project-margin"></div>
          <Project title="CaptyAI" 
                    description="A bot to captionize some image. The 'AI'   is using some pre-trained models, Resnet for image classifier, and LTSM as caption generator (also pre-trained) using Keras. (I have not built the Model from the scratch)." 
                    stacks="ReactJS; Flask; Keras API" 
                    imagefront={CaptyDepan} 
                    imageback={CaptyBelakang}
          />
          <div className="project-margin"></div>
          <Project title="Jamkrindo Learning Management System" 
                    description="I got the role to handle the website develompment of this multi platform app (Web, Android, iOS). The app's features includes: e-Learning, Training Management System, Forum, Blog, Cognitium Video, Key Performance Idicator all in one app" 
                    stacks="Laravel; Bootstrap" 
                    imagefront={LMSDepan} 
                    imageback={LMSBelakang}
          />
          <div className="project-margin"></div>
          <Project title="ON PROGRESS" 
                    description="COMING SOON" 
                    stacks="" 
                    imagefront={Cs} 
                    imageback={Cs}
          />
          <div className="project-margin"></div>
        </div>
        
        {/* // 3. Contact */}
        <div className="container contact" id="contact" data-aos="zoom-out-up">
          <div className="row">
            <div className="col">
              <p className="section-title main title-contact"><code className="code">3. </code>Contact Me</p>
            </div>
          </div>
          <div className="row">
            <div className="col interested">
              Interested to work with me?
            </div>
          </div>
          <div className="row">
            <div className="col reach-me d-flex justify-content-center">
              <Button text="Reach Me" link="mailto:rifki.banner@gmail.com"/>
            </div>
          </div>
        </div>

        {/* // Footer */}
        <footer >2021 | Rifki Fadillah Akbar</footer>
      </div>
    </div>
  );
}


export default App;
