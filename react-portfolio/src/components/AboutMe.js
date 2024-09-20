import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-1">
            <img src={"/Selfie.jpg"} alt="Alyza Nicole" />
          </div>
          <div className="about-desc">
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm Alyza Nicole Bulos. I'm 20 years old. I'm currently a third
              year computer science student from De La Salle Lipa I enjoy
              creating UI/UX designs. I love to play my guitar, crocheting, and
              basically anything crafts. I love listening to Paramore, Taylor
              Swift and NIKI!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
