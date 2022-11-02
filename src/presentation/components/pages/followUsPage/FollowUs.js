import "./FollowUs.css";
import { socialLinks } from "../../../../constants/constants";

function FollowUs() {
  //react render array homework (dannys example)

  const renderSocialLinks = () => {
    const socialRow = [];

    for (let i = 0; i < socialLinks.length; i++) {
      socialRow.push(
        <div className="social-link">
          <img className="social-logo" src={socialLinks[i].img} alt=""></img>
          <p className="social-url">{socialLinks[i].link}</p>
        </div>
      );
    }

    return <div className="social-black-container">{socialRow}</div>;
  };

  return (
    <div className="follow-us">
      <h1 className="follow-us-header">follow us</h1>
      {renderSocialLinks()}
    </div>
  );
}

export default FollowUs;
