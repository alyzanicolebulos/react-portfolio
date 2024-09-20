import React, {useState} from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupText, setPopupText] = useState('');

    const showPopup = (text) => {
        setPopupText(text);
        setPopupVisible(true);
      };
    
      const closePopup = () => {
        setPopupVisible(false);
      };

  return (
    <section id="portfolio">
      <div className="container">
        <h1>My Projects</h1>
        <div className="project-list">
          <div>
            <img src={"/crochetbyaly.png"} alt="crochetbyalylogo" />
            <h2 className="project-title">Crochet by Aly</h2>
            <p>Crochet Project</p>
            <button className="btn" onClick={()=> showPopup('Crochet by Aly is a project that showcases my crochet crafts.')}>
                See More
              </button>
          </div>
          <div>
            <img src={"/introspect.png"} alt="introspectlogo"/>
            <h3 className="project-title">Introspect</h3>
            <p>Your Mental Health Buddy</p>
            <button className="btn" onClick={() => showPopup('Introspect is an application that promotes mental health awareness.')}>
                See More
              </button>
          </div>
          <div>
            <img src={"/ingatkampus.png"} alt="ingatkampuslogo"/>
            <h4 className="project-title">Ingat Kampus</h4>
            <p>A Lost and Found System for De La Salle Lipa</p>
            <button className="btn" onClick={() => showPopup('Ingat KAmpus is a Lost and Found system designed to help the SDFO, students, faculty, and visitors to report and find their items in just a click.')}>
                See More
              </button>
          </div>
        </div>
        {popupVisible && (
        <div className="popup-overlay show">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <p>{popupText}</p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Portfolio;
