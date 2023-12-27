import React, { useState } from 'react'
import "../src/App.css"
import SignUp from './Component/SignUp'
const HomePage = () => {

    const [openSignUp, setOpenSignUp] = useState(false)
 
    const [openLogIn, setOpenLogIn] = useState(false)


    const signUpBox=()=>{
        console.log("openSignUp state:", openSignUp);
        setOpenSignUp(!openSignUp)
    }

    const closeSignUpBox =()=>{
      setOpenSignUp(false)
    }
    const logInBox =()=>{

    }
  return (
    <>
      <div className='container'>
        <div className='containerWrap'>
        <div className='topBox'>
            <div className='loginBox'>
            <div className='signUpTxt' onClick={signUpBox}><span>SignUp</span></div>
            <div className='signUpTxt' onClick={logInBox}><span>LogIn</span></div>
            </div>
           
        </div>
      
      <div className='textContainer'>
        <div className='headerText'><h1>ZOMATO</h1></div>
        <div className='paraText'><p>Find the best restaurants, cafés and bars in India</p></div>
      </div>


        </div>
       { openSignUp && (
        <>
        <div >
        <SignUp closePopUpBox={closeSignUpBox}/>
        </div>
    
        
        </>
       )}
      </div>
    </>
  
  )
}

export default HomePage