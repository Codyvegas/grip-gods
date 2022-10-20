import "./LandingPage.css";
import golfclub from "../../../../assets/icons/golf_club.png";
import { phrase } from "./constants";

function LandingPage() {
  return (
    <div classname="landing-page">
      <div className="slogan">
        <strong>
          golf club re-gripping done by the people for the people.
          <br /> created, owned, and run by two vegas guys who love golf.
        </strong>
      </div>
      <div className="img">
        <img src={golfclub} alt="" />
      </div>
      <div className="phrase">
        <strong>{phrase}</strong>
      </div>
    </div>
  );
}

export default LandingPage;
