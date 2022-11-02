import "./FollowUs.css";
import instaIcon from "../../../../assets/icons/instagram_logo.jpg";
import twitterIcon from "../../../../assets/icons/twitter_logo.jpg";
import facebookIcon from "../../../../assets/icons/facebook_logo.jpg";
import linkedInIcon from "../../../../assets/icons/linkedin_logo.jpg";

function FollowUs() {
  const socialLinks = [
    {
      img: instaIcon,
      link: "https://www.instagram.com/gotgrips",
    },
    {
      img: twitterIcon,
      link: "https://www.twitter.com/gotgrips",
    },
    {
      img: facebookIcon,
      link: "https://www.facebook.com/gotgrips",
    },
    {
      img: linkedInIcon,
      link: "https://www.linkedin.com/gotgrips",
    },
  ];

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

    return (
      <div className="social-black-container">
        <div className="black-container-content">{socialRow}</div>
      </div>
    );
  };

  return (
    <div className="follow-us">
      <h1 className="follow-us-header">follow us</h1>
      {renderSocialLinks()}
    </div>
  );
}

export default FollowUs;
