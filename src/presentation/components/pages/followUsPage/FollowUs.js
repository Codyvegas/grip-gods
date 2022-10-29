import "./FollowUs.css";
import instaIcon from "../../../../assets/icons/instagram_logo.jpg";
import twitterIcon from "../../../../assets/icons/twitter_logo.jpg";
import facebookIcon from "../../../../assets/icons/facebook_logo.jpg";
import linkedInIcon from "../../../../assets/icons/linkedin_logo.jpg";

function FollowUs() {
  return (
    <div className="follow-us">
      <h1 className="follow-us-header">follow us</h1>
      <div className="social-black-container">
        <div className="black-container-content">
          <div className="instagram-link">
            <img className="instagram-logo" src={instaIcon} alt=""></img>
            <p className="instagram-url">https://www.instagram.com/gotgrips</p>
          </div>
          <div className="twitter-link">
            <img className="twitter-logo" src={twitterIcon} alt=""></img>
            <p className="twitter-url">https://www.twitter.com/gotgrips</p>
          </div>
          <div className="facebook-link">
            <img className="facebook-logo" src={facebookIcon} alt=""></img>
            <p className="facebook-url">https://www.facebook.com/gotgrips</p>
          </div>
          <div className="linkedin-link">
            <img className="linkedin-logo" src={linkedInIcon} alt=""></img>
            <p className="linkedin-url">https://www.linkedin.com/gotgrips</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
