import "./Bullet.css";

interface BulletProps {
  image: string;
}

const Bullet = ({image}: BulletProps) => {
  return (
    <div>
      <img src={image} alt="blueberry1" className="blueberry" />
      {/* <div className="overlay-text">
        <span className="hello-text">hello! </span>
        <span className="name-text">i'm amina</span>
      </div> */}
    </div>
  );
};

export default Bullet;
