import React from 'react';
import { Link } from 'react-router-dom'

const Account = () => {
    return (
        <div>
            <nav className='d-flex justify-content-end p-2'>
                <Link to={'/'} >
                    <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 1 20 20" strokeWidth={2} stroke="#000000" className="w-6 h-6" height={'50px'} width='50px'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    </button>
                </Link>
            </nav>
            <div class="acircle1">
                <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="102" transform="matrix(1 0 0 -1 102.5 102.5)" stroke="black"/>
                </svg>
            </div>
            <div align="left" class="aname mb-4">
                <h1 class="agreetings">Hello!</h1>

            </div>
            <div class="container aaccountdivs row">
                <div class="col-md-6 aimage" align="center">
                    <div class="aimagediv">
                        <div class="aimages">
                            <image src="../public/logo192.png"></image>
                        </div>
                        <div>
                            <h2 class="anametag">Jane Doe </h2>
                            <h3 class="ajob">Developer</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ainfo">
                    <div>
                        <form>
                            <label class="alabel">Your Name</label><br />
                            <input type="text" class="ainput"></input><br />
                            <label class="alabel">Your Email</label><br />
                            <input type="email" class="ainput"></input><br />
                            <label class="alabel">Your Bio</label><br />
                            <textarea class="ainput abio" type='text-area'></textarea><br />
                            <label class="alabel">Your area of interest</label><br />
                            <input type="text" class="ainput"></input><br />
                            <button type="submit" class="ainputs">Save Details</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Account;