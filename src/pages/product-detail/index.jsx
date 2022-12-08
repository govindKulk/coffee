import ProductDetailSection from "./product-detail-section";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BestBuy from "./bestbuy";
import "./product-detail.css";
import NavbarMain from "../../common/components/navbar";
import Footer from "../../common/components/footer";

const ProductDetail = () => {
  const params = useParams();
  const { gameId, gameTitle } = params;
  const [bestPrice, setBestPrice] = useState(0);
  const [thumb, setThumb] = useState("");
  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`)
      .then((res) => res.json())
      .then((data) => {
        setThumb(data.info.thumb);
        setBestPrice(data.cheapestPriceEver.price);
      });
  }, []);

  return (
    <>
      <NavbarMain />
      <div className="container">
        <div className="product-detail-main">
          <div className="thumbnail">
            <h1>{gameTitle}</h1>
            <img src={thumb} alt="" />
          </div>
          <div className="price-details">
          <BestBuy cheapest={bestPrice} />
          <div className="best-deals">
            <h3>Checkout some more options. </h3>
            <ProductDetailSection id={gameId} />
          </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
