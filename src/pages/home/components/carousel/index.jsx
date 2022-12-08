import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../../../../common/assets/slider2-bg.webp'
import img1 from '../../../../common/assets/slider1-bg.webp'
import img3 from '../../../../common/assets/slider3-bg.webp'
import './carousel.css'

export default function Slider() {
    return(
        <div className="parent-carousel">

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
    </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />

       
      </Carousel.Item>
      
    </Carousel>
        </div>
    )
}
