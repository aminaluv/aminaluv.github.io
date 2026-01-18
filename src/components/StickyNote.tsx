import "./StickyNote.css";
import note from "../images/noteyellow.webp";
import blueberry1 from "../images/blueberry1.png";
import blueberry2 from "../images/blueberry2.png";
import blueberry3 from "../images/blueberry3.png";
import blueberry4 from "../images/blueberry4.png";

import Bullet from "./Bullet";

const AboutText = () => {
  return (
    <div className="sticky-note-wrapper">
      <div className="note-container">
        <img src={note} alt="note" className="sticky-note" />
        <div className="note-text">
          <span className="header-text">Interests:</span>
          <ul className="list-text">
            <li>Artificial Intelligence</li>
            <li>
              Software/Web <span className="highlight">Development</span>
            </li>
            <li>
              Tech for <span className="highlight">Social Impact</span>
            </li>
            <li>
              <span className="highlight">Human-Computer</span> Interaction
            </li>
          </ul>
        </div>
      </div>
      <div className="bullet-points-container">
        <div className="bullet-point">
          <Bullet image={blueberry1} />
          <span className="bullet-text">
            Senior at MIT pursuing a Bachelor of Science in Artificial
            Intelligence and Decision Making (6-4)
          </span>
        </div>
        <div className="bullet-point">
          <Bullet image={blueberry2} />
          <span className="bullet-text">Minoring in Management (15-1)</span>
        </div>
        <div className="bullet-point">
          <Bullet image={blueberry3} />
          <span className="bullet-text">
            New Engineering Education Transformation (NEET) Autonomous Machines
            certificate
          </span>
        </div>
        <div className="bullet-point">
          <Bullet image={blueberry4} />
          <span className="bullet-text">
            3x Amazon Software Development Engineering Intern
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
