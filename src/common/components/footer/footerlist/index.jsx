import React from "react";

export default function FooterList(props){
    return(
        <div className="contact">
                <ul className="footer-list">
                    <li>
                    <h3>{props.head}</h3>
                    </li>
                    <li>
                        <a className="footer-link" href="#">{props.address}</a>
                    </li>
                    <li>
                    <a className="footer-link" href="#">{props.phone}</a>
                    </li>
                    
                    <li>
                    <a className="footer-link" href="#">{props.mail}</a>
                    </li>
                    
                   
                    
                    
                </ul>
            </div>
    )
}