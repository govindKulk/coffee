import React from "react";
import Footer from "../../common/components/footer";
import NavbarMain from "../../common/components/navbar";
import Slider from "./components/carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import free from '../../common/assets/free-image.png';
import hot from '../../common/assets/hot-deals.jpg';
import search from '../../common/assets/search-image.jpg';

import './home.css'

const Home = () => {
    return (
        <>
       <NavbarMain active="Deals"/>
       <Slider />
       <div className="container">
       <div className="row">
        <div className="col-md-4">
        <Card >
        <div className="custom-height-img" style={{height: "400px"}}>
      <Card.Img variant="top" src={hot} />
      </div>
      <Card.Body>
        <Card.Title>Hot Deals</Card.Title>
        <Card.Text>
        <div className="home-card-text">
         Grab your favourite deal.
         Take a look at some of the best deals available across the all the gaming platforms.
         </div>
        </Card.Text>
        <Button href='/deals' variant="dark" className="my-4">Show Deals</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4">
        <Card >
        <div className="custom-height-img d-flex align-items-center" style={{height: "400px"}}>
      <Card.Img variant="top" src={search} />
      </div>
      <Card.Body>
        <Card.Title>Search any Game</Card.Title>
        <Card.Text>
        <div className="home-card-text">
         Now you can search your favourite game out of the lakhs of available games.
         Take a look at our powerful search bar.
         </div>
        </Card.Text>
        <Button variant="dark" href="/search" className="my-4">Search</Button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4">
        <Card >
        <div className="custom-height-img" style={{height: "400px"}}>
      <Card.Img variant="top" src={free} />
      </div>
      <Card.Body>
        <Card.Title>Free Deals</Card.Title>
        <Card.Text>
        <div className="home-card-text">
         Grab your favourite deal.
         Take a look at some of the free deals available across the all the gaming platforms.
         </div>
        </Card.Text>
        <Button href="/deals" variant="dark" className="my-4">Free Deals</Button>
      </Card.Body>
    </Card>
        </div>
       </div>
       </div>
       <Footer />
        </>
    )
}

export default Home;