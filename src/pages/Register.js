import React from 'react'
import styles from './Register.module.css'

function Register() {
    return ( 
        <div className={styles.r_Register}>
            <div className={styles.r_images}><img src="Tech Life Blockchain.png" alt="Register logo" className={styles.r_register_image}/>
            <img src='./lines 5.svg' alt='lines' className={styles.r_lines}/>
            </div>
            <div className={styles.r_info}>
                <p className={styles.r_sign}>Sign Up</p>
                <p className={styles.r_here}>Welcome Here!</p>
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