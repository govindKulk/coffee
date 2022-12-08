import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './checkout.css'


const Checkout = () => {
    const param = useParams();
    const {gameId} = param;
    const [dealId, setDealId] = useState(''); 
    
    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`)
        .then(res=>res.json())
        .then(data=> setDealId(data.deals[0].dealID))
    },[])
    useEffect(() => {
        setTimeout(()=>{
            window.location.href = (`https://www.cheapshark.com/redirect?dealID=${dealId}`)
        }, 3000)
    },[dealId])
    return(
        <div className="container">
            Thank you for visiting our website.
            You will be redirected to gameschalk website to make payment.

        </div>

    )
}

export default Checkout;