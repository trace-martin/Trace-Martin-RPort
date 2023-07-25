import React from 'react';
import profileImage from '../assets/hero.jpg';
import '../styles/About.css';

function AboutMe() {
  return (
    <div className="aboutMe">
        <h2>
          About Me
        </h2>
      <div className="aboutMeContent">
        

        <div className="aboutMePhoto">
          <img src={profileImage} alt="Hero" />
        </div>
        <p>
          Hello, I'm Trace Martin, a junior developer with a passion for increasing my skills and knowledge in the coding world.
          The possibilities that come with coding excite me greatly, and I am fascinated by understanding how things work and fit 
          together. My ultimate goal is to leverage the power of code to contribute to positive changes in the world.
        </p>
          
        <p>
          Over the past six months, I have been dedicatedly honing my craft at the University of Denver's coding bootcamp. 
          During this transformative journey, I have delved into a diverse range of technologies, including Browser-Based Technologies like HTML, CSS, JavaScript, and jQuery. 
          I have also explored the realms of Databases such as MySQL and MongoDB, learned about Deployment using platforms like Heroku and Git, and gained expertise in Quality Assurance by writing tests. 
          Additionally, I've ventured into Server-Side Development, mastering technologies like Node.js, Express, and the MERN Stack, among much more.
        </p>

        <p>
          Collaboration is where I thrive as a developer. 
          Working in a team environment allows me to observe and learn from my peers, which continuously betters my skills and abilities. 
          I strongly believe in the power of teamwork and am always eager to offer my support and learn from others in the process.
        </p>
        
        <p>
          Looking ahead, my career goal as a developer is to become proficient enough to build fully functioning applications independently. 
          I aspire to be the go-to person others come to with questions, fostering a collaborative and supportive environment for learning and growth.
        </p>

        <p>
          As both an individual and a developer, I am known for my unwavering dedication. 
          When I take on a task, I give it my all, pushing through challenges until I achieve success. 
          My tenacity and determination drive me forward in my journey as a React developer.
        </p>

        <p>
          To continue my growth and development, I am committed to building more projects and enrolling in relevant classes that 
          will further sharpen my skills and expertise.
        </p>

        <p>
          Thank you for visiting my portfolio, and I hope you enjoy exploring my projects and learning more about my journey 
          as a React developer!
        </p>
        </div>
    </div>
  );
}

export default AboutMe;