import React from "react";
import FooterList from "../footerlist";
import "./footer-top.css";
export default function TopFooter() {
  return (
    <div className="top-footer">
      <div className="footer-list-section">
        <FooterList
          head="Contact"
          address="35 W 46nd Street, Wall Road New York, USA."
          phone="+(000) 1234-56789"
          mail="support@example.com"
        />
        <FooterList
          head="Support"
          address="Faq"
          phone="Shipping & Returns"
          mail="contact us"
        />
        <FooterList
          head="Info"
          address="About Us"
          phone="Our Stores"
          mail="Size Guide"
        />
      </div>
      <div className="footer-newsletter-section">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <div className="input">
            <input type="text" name="" className="newsLetterBar" />
            <button>SIGN UP</button>
        </div>
        <p className="footer-text">Your email address will be used in accordance with our privacy policy</p>
      </div>
    </div>
  );
}
