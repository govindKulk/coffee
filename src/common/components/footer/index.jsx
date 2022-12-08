import React from "react";
import BottomFooter from "./footer-bottom";
import TopFooter from "./footer-top";
import './footer-main.css'
export default function Footer() {
   return  <div className="footer-main">

        <TopFooter />
        <BottomFooter />
    </div>
}