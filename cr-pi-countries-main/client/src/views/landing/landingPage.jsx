import { Link } from "react-router-dom";
import "./landing.css";

function landingPage() {
  return (
    <div className="landing-container">
      <div className="landing-button">
        <Link to="/home">
          <button className="button-landing">Lets explore
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link> 
      </div>
        <h2 className="h2-landing">Welcome to my website!</h2>
      <div className="welcome-message">
        <p>Explore the world and discover fascinating information about countries from around the globe!</p>
      </div>
        <div className="begin-message">
        <p> Begin your journey now!</p>
        </div>
    </div>
  );
}

export default landingPage;
