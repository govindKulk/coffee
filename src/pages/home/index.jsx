import React from "react";
import Footer from "../../common/components/footer";
import NavbarMain from "../../common/components/navbar";
import Slider from "./components/carousel";

import './home.css'

const Home = () => {
    return (
        <>
       <NavbarMain active="Deals"/>
       <Slider />
       <Footer />
        </>
    )
}

export default Home;