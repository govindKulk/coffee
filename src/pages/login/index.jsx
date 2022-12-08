import React from "react";
import LeftLogin from "./leftlogin";
import RightLogin from "./rightlogin";
import './login.css'
import NavbarMain from "../../common/components/navbar";
import Footer from "../../common/components/footer";


export default function Login(){
    return (<>
        <NavbarMain />
        <div className="login-section">
             <LeftLogin/>
             <RightLogin />
        </div>
        <Footer />  
        </>
       
    )
}