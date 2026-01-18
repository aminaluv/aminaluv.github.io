import "./NameText.css";
import grid from "../images/grid.png";

const AboutText = () => {

    return (
        <div className="grid-container">
            <img src={grid} alt="grid" className="grid-image" />
            <div className="overlay-text">
                <span className="hello-text">hello! </span>
                <span className="name-text">i'm amina</span>
            </div>
        </div>
    )
}

export default AboutText;