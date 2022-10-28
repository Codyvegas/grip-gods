import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-us">
        <strong className="strong-black">about us</strong>
      </div>
      <div className="black-container">
        <div className="our-mission-container">
          <h1>
            <strong className="strong">
              <u>our mission</u>
            </strong>
          </h1>
          <p className="p">
            our mission is to help you get a grip. literally...we strive to set
            you up with a new grip on your golf clubs and make the game of golf
            as easy as ever. whether you prefer to drop them off in our outlet
            or have them picked up & delivered with our premium service, you
            will never be left without a firm grip on your clubs again leaving
            you ready to play your best round yet.
          </p>
        </div>
        <div className="who-container">
          <h1>
            <strong className="strong">
              <u>who we are</u>
            </strong>
          </h1>
          <p className="p">
            we are two lads with a record of doing quality business and a long
            history of golf experience making us the perfect go-to for your golf
            needs. we only use the highest ranked grips to fit your clubs to
            your preferred setting so you can play like the pros. not sure how
            you want to set up your grips or what would be most beneficial to
            your game? we got you. need them delivered and on a time crunch
            before a golf trip with the boys? we got you. whatever you need we
            got you, 100% satisfaction guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
