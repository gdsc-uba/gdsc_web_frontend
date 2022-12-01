import React from 'react'
import './Register.css'

function Register() {
    return ( 
        <div className="Register">
            <div className='images'><img src="Tech Life Blockchain.png" alt="Register logo" className='register_image'/>
            <img src='./lines 5.svg' alt='lines' className='lines'/>
            </div>
            <div className="info">
                <p className="sign">Sign Up</p>
                <p className="here">Welcome Here!</p>
                <label>Email</label><br/>
                <input type='text' name='email' placeholder='email' required/><br/><br/>
                <label>Password</label><br/>
                <input type='password' name='password' placeholder='password' required/><br/><br/>
                <label>Confirm Password</label><br/>
                <input type='password' name='password' placeholder='password' required/><br/><br/>
                <button type='submit' value="">Sign Up</button>
                <p><center>Already have an account? <a href='login'>Login</a></center></p>
            </div>
        </div>
     );
}
 
export default Register;