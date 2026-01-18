import "./Bullet.css";
import blueberry1 from "../images/blueberry1.png";

const Bullet = () => {
  return (
    <div>
      <img src={blueberry1} alt="blueberry1" className="blueberry" />
      {/* <div className="overlay-text">
        <span className="hello-text">hello! </span>
        <span className="name-text">i'm amina</span>
      </div> */}
    </div>
  );
};

export default Bullet;
