import React, { useState } from 'react'
import "../App.css"
const SignUp = ( {closePopUpBox}) => {
          

          
  return (
    <>
    <div className='popUpCardContainer'>
    <div className='popupContentBox'>
        <p>Sign Up</p>
        <p onClick={closePopUpBox}>X</p>
        
    </div>
    <div className='inputContainer'>
      <div className='inputBox'>
        <input type="text" placeholder='Enter Name' />
      </div>


      <div className='inputBox'>
        <input type="text" placeholder='Email' />
      </div>
      <div className='inputBox'>
        <input type="text" placeholder='Password' />
      </div>
  

    <div className='checkBoxContainer'>
      <input  type="checkbox"  />
      <div className='textCheck'> <p>I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</p></div>
    </div>


    </div>
    </div>
    
    </>
  )
}

export default SignUp




