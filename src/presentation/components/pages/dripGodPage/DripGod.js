import main from "../../../../assets/icons/main_logo.jpg";
import "./DripGod.css";
import picture1 from "../../../../assets/jewelryImgs/picture_1.png";
import picture2 from "../../../../assets/jewelryImgs/picture_2.png";
import picture3 from "../../../../assets/jewelryImgs/picture_3.png";
import picture4 from "../../../../assets/jewelryImgs/picture_4.png";
import picture5 from "../../../../assets/jewelryImgs/picture_5.png";

function DripGod() {
  return (
    <div className="drip-god-page">
      <div className="drip-god-header">
        <strong>drip god</strong>
      </div>
      <div className="black-container-drip">
        <div className="get-drippy">
          get drippy like drip god himself. below are our premium jewelry
          options made to your exact specifications
        </div>
        <div className="img-div">
          <img src={main} alt="" />
        </div>
        <div className="jewelry-img-container">
          <img src={picture1} alt="" />
          <img src={picture2} alt="" />
          <img src={picture3} alt="" />
          <img src={picture4} alt="" />
          <img src={picture5} alt="" />
        </div>
        <div className="pricing-container">
          <span>$199.99</span>
          <span>$149.99</span>
          <span>$149.99</span>
          <span>$249.99</span>
          <span>$199.99</span>
        </div>
      </div>
    </div>
  );
}

export default DripGod;
