import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Deal from "../../common/components/deal/index.jsx";
import Footer from "../../common/components/footer/index.jsx";
import NavbarMain from "../../common/components/navbar/index.jsx";
// import jsonObj from "../../common/constants/data.js";
import "./deals.css";
// console.log(jsonObj);

export default function Deals() {
  
  const[jsonObj, setJson] = useState([])
  React.useEffect(()=>{
    fetch('https://www.cheapshark.com/api/1.0/deals?pageSize=40')
    .then(res=>res.json())
    .then(data=>setJson(data))
  },[])
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
      <Footer />
     
    </>
  );
}
