import "./AboutPage.css";
import small_clubs from "../../../../assets/icons/small_clubs.jpg";
import golfclub from "../../../../assets/icons/golf_club.png";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="img">
        <img src={golfclub} alt="" />
      </div>
      <div>
        <strong>about us</strong>
      </div>

      <div className="black-container">
        <img src={small_clubs} alt="" />
        <img src={small_clubs} alt="" />
        <h1>
          <strong>our mission</strong>
        </h1>
        <p>
          {" "}
          our mission is to help you get a grip. literally...we strive to
          <br />
          set you up with a new grip on your golf clubs and make
          <br />
          the game of golf as easy as ever. whether you prefer to
          <br />
          drop them off in our outlet or have them picked up &
          <br />
          delivered with our premium service, you will never be
          <br /> left without a firm grip on your clubs again leaving you
          <br />
          ready to play your best round yet.
        </p>
        <h1>
          <strong>who we are</strong>
        </h1>
        <p>
          we are two lads with a record of doing quality business
          <br />
          and a long history of golf experience making us the perfect
          <br />
          go-to for your golf needs. we only use the highest ranked
          <br />
          grips to fit your clubs to your preferred setting so you can
          <br />
          play like the pros. not sure how you want to set up your
          <br />
          grips or what would be most beneficial to your game? we
          <br />
          got you. need them delivered and on a time crunch before
          <br />
          a golf trip with the boys? we got you. whatever you need
          <br />
          we got you, 100% satisfaction guaranteed.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
