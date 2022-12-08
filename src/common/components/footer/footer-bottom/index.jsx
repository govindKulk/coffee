import React from "react";
import './footer-bottom.css'
import p1 from '../../../assets/parteners/p1.svg'
import p2 from '../../../assets/parteners/p2.svg'
import p3 from '../../../assets/parteners/p3.svg'
export default function BottomFooter() {
   return (
      <div className="footer-bottom">
         <div className="copyright">
         <h3>© 2022 MaxGames Private Limited</h3>
         </div>
         <div className="footer-icons">
         <i className="fa-brands fa-twitter fa-2x" ></i>
         <i className="fa-brands fa-facebook-f fa-2x"></i>
         <i className="fa-brands fa-instagram fa-2x"></i>
         <i className="fa-brands fa-youtube fa-2x"></i>
         </div>
         <div className="partener">
         <ul className="dt-sc-list-inline payment-icons">
              
              <li className="icon--payment">
                <img src={p1} alt="" />
              </li>
              
              <li className="icon--payment">
              <img src={p2} alt="" />
              </li>
              
              <li className="icon--payment">
                
              <img src={p3} alt="" />
              </li>
              
              <li className="icon--payment">
                <img src={p1} alt="" />
              </li>
              
              <li className="icon--payment">
              <img src={p2} alt="" />
              </li>
              
              <li className="icon--payment">
                
              <img src={p3} alt="" />
              </li>
              
              
              
             
              
              
         </ul>
         </div>
      </div>
   )
}