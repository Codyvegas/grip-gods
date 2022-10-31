import "./LandingPage.css";
import { phrase } from "./constants";

function LandingPage() {
  return (
    <div classname="landing-page">
      <div className="slogan">
        <strong>
          golf club re-gripping done by the people for the people.
          <br /> created, owned, and run by two vegas guys who just love golf!
        </strong>
      </div>
      <div className="black-box"></div>
      <div className="phrase">
        <strong>{phrase}</strong>
      </div>
    </div>
  );
}

export default LandingPage;
