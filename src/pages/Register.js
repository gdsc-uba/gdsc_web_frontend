import React from 'react'
import './Register.css'

function Register() {
    return ( 
        <div className="Register">
            <div className='image'><img src="Tech Life Blockchain.png" alt="Register logo"/>
            </div>
            <img src='./lines 5.svg' alt='lines' className='lines'/>
            <div className="info">
                <p className="sign">Sign Up</p>
                <p className="here">Welcome Here!</p>
                <label>Email</label><br/>
                <input type='text' name='email' placeholder='email'/><br/><br/>
                <label>Password</label><br/>
                <input type='password' name='password' placeholder='password'/><br/><br/>
                <label>Confirm Password</label><br/>
                <input type='password' name='password' placeholder='password'/><br/><br/>
                <button type='submit' value="">Sign Up</button>
                <p><center>Already have an account? <a href='login'>Login</a></center></p>
            </div>
        </div>
     );
}
 
export default Register;