
import React, { useEffect, useState } from 'react'

const ProductDetailSection = (props) => {
    const [stores, setStores] = useState([])
    const [gameData, setGameData] = useState([]);
    const [gameDetails, setGameDetails] = useState({});

    //This effect get data for the all the stores
    useEffect(() => {
        fetch("https://www.cheapshark.com/api/1.0/stores")
        .then(res=> res.json())
        .then(data => {setStores(data)})
    },[])

    //Gets the data for the specific game
    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${props.id}`)
        .then(res=> res.json())
        .then(data=>{
            let temp = data.deals.map(object => {
                return {
                   [object.storeID]: object.price
                }
            })
            setGameData(temp);
            // console.log(gameData) It contains storeID and the respective prices
        })
    },[stores])
    // gamedata => storeId: price.
    // storeData => storeId: storeName
   let storeData = stores.map(object => {
    return {
        [object.storeID]: object.storeName
    }
   })

    let namePriceData = gameData.map(object => {
        let id = Object.keys(object)[0];
        
            for(let i = 0; i<storeData.length; i++){
                let storeId = Object.keys(storeData[i])[0];
                
                if(storeId === id){
                    //object.storeId is not working but below code is working
                   let name = Object.values(storeData[i])[0]  
                   return{
                    [name]: Object.values(object)[0]
                   }   
                }
            }
        //
    })
    // console.log(namePriceData)   
    let renderArray = namePriceData.map(object => {
        return <p className='price-para'>{Object.keys(object)[0]}: {Object.values(object)[0]}$</p>
    })

    
    let newArr = stores.map(object => {
        return {storeID: object.storeID,
                storeName: object.storeName}       
    })
    // console.log(stores);
    return(
    <>
        <div className="game-title">
         
            {renderArray}
        </div>
   
    </>
    )
}

export default ProductDetailSection