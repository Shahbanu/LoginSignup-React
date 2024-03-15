import React from 'react';
import "./LoginPage.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div>
    <nav>
        <div className='nav-links'>
            <ul>
                <div className='nav-center'>
                <li>
                    <a href='/Product'>Product</a>
                </li>
                <li>
                    <a href='/Resources'>Resources</a>
                </li>
                <li>
                    <a href='/Support'>Support</a>
                </li>
                <li>
                    <a href='/Pricing'>Pricing</a>
                </li>
                <li>
                    <a href='/Blog'>Blog</a>
                </li>
                </div>
                <div className='nav-right'>
                <li>
                    <a href='/SignupPage'>SignUp</a>
                </li>
                <li>
                <a href='/RequestDemo'>Request Demo</a>
                </li>
                </div>
                </ul>
      
        </div>
    </nav>
 



    <div className='header-container'>
    <div className='header-content'>
        <h1 className='head1'>Login to Your Account
        </h1>
        <p>Choose from 130,000 online video courses with new additions<br></br> published every second month</p>
    </div>

    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    
</div>




<div className='content'>
        <form className='formMenu'>
            <div className='left-content'>
<div className='brand-influencer'>
<input type="checkbox" id="Brand/Influencer" name="Brand/Influencer" value="Brand/Influencer"/>
  <label for="Brand/Influencer"> &nbsp;Brand/Influencer</label><br></br>


</div>
    <label for="password"></label>
    <input type="password" placeholder="8 Digit Pin" id="password"></input><br></br>
   
    
    <button className='login-button'><a href='login'>Login to Your Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <FaArrowRightLong /></a></button>
    
            </div>
            <span className='spanDesign'>/</span>
            <div class="social">
    <button> <a href='https://www.google.com'><FaGoogle /> Sign in with Google</a></button><br></br>
    <button> <a href='https://www.facebook.com'><FaFacebookF /> Sign in with Facebook</a></button><br></br>
    <button> <a href='https://www.apple.com'><FaApple /> Sign in with Apple Account</a> </button>
            </div>
        </form>
        <div className='forgot-password'>
            <a href='forgot'>Forgot Password?</a></div>
    </div>

    <div className='footer'>
        <p className='privacy-policy'>Privacy Policy</p>
        <p className='copyright'>Copyright@Razor 2022</p>
    </div>



    </div>
  );
};

export default LoginPage