import main from "../../../../assets/icons/main_logo.jpg";
import "./DripGods.css";

function DripGod() {
  return (
    <div className="drip-god-page">
      <div className="drip-god">
        <strong>drip god</strong>
      </div>
      <div className="black-container-drip">
        <div className="get-drippy">
          get drippy like drip god himself. below are our premium jewelry
          options made to your exact specifications.
        </div>
        <div className="img-div">
          <img src={main} alt="" />
        </div>
        <div className="jewelry-imgs">
          {/* <img src= />
                <img src= />
                <img src= />
                <img src= />
                <img src= /> */}
        </div>
      </div>
    </div>
  );
}

export default DripGod;
