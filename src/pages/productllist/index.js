
import Deal from "../../common/components/deal/index.jsx";
import NavbarMain from "../../common/components/navbar/index.jsx";
import jsonObj from "../../common/constants/data.js";

export default function Deals() {
    const newArr = jsonObj.map((object) => (
      <Deal
        gameID={object.gameID}
        title={object.title}
        thumb={object.thumb}
        salePrice={object.salePrice}
        normalPrice={object.normalPrice}
      />
    ));
  
    // console.log(newArr)
    return (
      <>
        <NavbarMain />  
        <div className="container">
          <div className="deals-section">{newArr}</div>
        </div>
      </>
    );
  }
  