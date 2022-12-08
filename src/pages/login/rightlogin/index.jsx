import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './right-login.css';

export default function RightLogin() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData(prevForm => {
            return {
                    ...prevForm,
                    [name]: value
            }
          
        })
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password != "" && formData.email != ""){
            navigate('/');
        }
    }
    return(

        <div className="login-form" >
            <form action="#" onSubmit={handleSubmit}>
                <div className="input-container">
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="name" onChange={handleChange} value={formData.email}  />
                </div>
                <div className="input-container">
                <label htmlFor="pwd">Password</label>
                <input type="password" name="password" id="pwd" onChange={handleChange} value={formData.password}/>
                </div>
                
                <div className="input-container">
                    <button className="signup-btn">
                        Login
                    </button>
                </div>
               
            </form>
        </div>
    )
}