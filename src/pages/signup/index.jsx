
import React, { useState } from "react";
import NavbarMain from '../../common/components/navbar'
import Footer from '../../common/components/footer'

import { Navigate, useNavigate } from "react-router-dom";
import './signup.css'
const SignUp = () => {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
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
        if(formData.password === formData.passwordConfirm){
            navigate('/login')
        }
    }

    return (
      <>
     <NavbarMain />
      <div className=" signup-container mb-4">

      <h1>Register Now</h1>
      <div className="signup-form" >
       
      <form action="#" onSubmit={handleSubmit}>
          <div className="signup-input-container">
          <label className="register-labels" htmlFor="name">Email</label>
          <input type="email" name="email" id="name" onChange={handleChange} value={formData.email}  />
          </div>
          <div className="signup-input-container">
          <label className="register-labels" htmlFor="pwd">Password</label>
          <input type="password" name="password" id="pwd" onChange={handleChange} value={formData.password}/>
          </div>
          <div className="signup-input-container">
          <label className="register-labels" htmlFor="cpwd">Confirm Password</label>
          <input type="password" name="passwordConfirm" id="cpwd" onChange={handleChange} value={formData.passwordConfirm}/>
          </div>
          <div className="signup-input-container">
              <button className="signup-btn">
                  Login
              </button>
          </div>
         
      </form>
  </div>
  </div>
  <Footer />
  </>
      )
}

export default SignUp;