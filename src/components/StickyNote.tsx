import "./StickyNote.css";
import note from "../images/noteyellow.webp";
import blueberry from "../images/blueberry1.png";
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
          <Bullet />
          <span className="bullet-text">
            Senior at MIT studying for a Bachelor of Science in Artificial
            Intelligence and Decision Making (6-4)
          </span>
        </div>
        <div className="bullet-point">
          <Bullet />
          <span className="bullet-text">Minoring in Management (15-1)</span>
        </div>
        <div className="bullet-point">
          <Bullet />
          <span className="bullet-text">Pursuing the New Engineering Education Transformation (NEET) Autonomous Machines certificate</span>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
