import React from "react";
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";
import './deal.css'

const Deal = (props) => {
    const navigate = useNavigate();
   

        
       
        
     
    let {gameID,title,thumb,salePrice,normalPrice,dealID} = props;
    function goToDeal() {
        navigate(`/game/${title}/${gameID}`);
    }
    let url = 'https://www.cheapshark.com/redirect?dealID='+dealID;
    return(
        
        <div className="deal-container" onClick={goToDeal}>
        <img src={thumb}/>
        <h1><a>
        {title}</a></h1>
        <p className="game-id">GameID: {gameID}</p>
        <h3>Price: {salePrice==0.0?"FREE":salePrice} </h3>
        {normalPrice&&<h3 className="normal-price">Original Price: ${normalPrice}</h3>}
       </div>
        
    )
}

export default Deal;