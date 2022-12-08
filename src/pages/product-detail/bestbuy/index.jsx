import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './bestbuy.css'


const BestBuy = (props) => {
    
    const navigate = useNavigate();
    const param = useParams();
    const {gameId} = param;
    const goToCheckOut = ()=>{
        navigate(`/checkout/${gameId}`);
    }
 
    return(
        <a onClick={goToCheckOut} className='best-buy-button'>Best Buy <span className='cheapest'>{props.cheapest}</span></a>
    )
}
export default BestBuy;