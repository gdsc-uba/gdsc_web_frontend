import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div className="gdsc">
            <Navbar />
            <main className="pb-5">
                <section className="container text-center py-5 header-section">
                    <h4 className="">Welcome to</h4>
                    <h1 className="fw-bolder header-main-title">GDSC UBA</h1>
                    <p>Google Developer Student Club Univerty of Bamenda</p>
                    <button className="btn bbutton">Join us</button>

                    <span className="icon1">
                        <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="132.579" y="-15.2929" width="209.122" height="209.122" rx="39.5" transform="rotate(45 132.579 -15.2929)" stroke="#4285F4"/>
                        </svg>
                    </span>

                    <span className="icon2">
                    <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle r="102" transform="matrix(1 0 0 -1 102.5 102.5)" stroke="black"/>
                    </svg>
                    </span>

                    <span className="icon3">
                        <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="132.579" y="-15.2929" width="209.122" height="209.122" rx="39.5" transform="rotate(45 132.579 -15.2929)" stroke="#4285F4"/>
                        </svg>
                    </span>
                </section>

                <section className="home-secion-2 container">
                    <div className="text-center inner">
                        <div>
                            <h1>Bringing Communities</h1> 
                            <h1>Together</h1>
                        </div>
                    </div>
                </section>

                <section className="container my-4 sheight">
                    <span className="bg">
                        <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle r="102" transform="matrix(1 0 0 -1 102.5 102.5)" stroke="black"/>
                        </svg>
                    </span>
                    <div className="row py-4">
                        <div className="col-md-6 d-flex align-items-center justify-content-center section-3-inner_left">
                            <h1 className="stroke-white-text">Our<br /> Events</h1>
                        </div>
                        <div className="col-md-6 container py-4 ps-4 section-3-inner_right">
                            <h1 className="mb-5">Mobile <br />App Dev</h1>
                            <p className="mb-5">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempar incididunt</p>
                        </div>
                    </div>
                </section>

                <section className="container my-5">
                    <h1 className="stroke-white-text text-center">Projects</h1>
                    <div className="section-4-div"></div>
                </section>

                <section className="container text-center p-5 section-5 my-5">
                    <div className="container" style={{width: 50 + '%'}}>
                        <h1>Lorem Ipsum dolor sit amet, consectetur elit,sed do eiusmod</h1>
                        <button className="btn bbutton mt-4 px-4 py-2">Join Us</button>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="container">
                        <h1 className="stroke-white-text text-center">Our Members</h1>
                    </div>
                    <div className="section-5-carousel d-flex justify-content-center">
                        <div className="bcarousel text-center p-4 mx-2" style={{backgroundColor: '#87cefa70'}}>
                            <img className="img-fluid mx-auto" src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt=''></img>
                            <h5 className="mt-2" >John Doe</h5>
                            <p>Web Developer</p>
                        </div>

                        <div className="bcarousel text-center p-4 mx-2" style={{backgroundColor: '#f0808081'}}>
                            <img className="img-fluid mx-auto" src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt=''></img>
                            <h5 className="mt-2">Jane Doe</h5>
                            <p>App Developer</p>
                        </div>

                        <div className="bcarousel text-center p-4 mx-2" style={{backgroundColor: '#15739285'}}>
                            <img className="img-fluid mx-auto" src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt=''></img>
                            <h5 className="mt-2">John Doe</h5>
                            <p>Web Developer</p>
                        </div>

                        <div className="bcarousel text-center p-4 mx-2" style={{backgroundColor: '#87cefa70'}}>
                            <img className="img-fluid mx-auto" src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt=''></img>
                            <h5 className="mt-2">John Doe</h5>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-5 bg-dark">
                <div className="bg-image bg1">
                    <svg width="265" height="265" viewBox="0 0 265 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="132.579" y="-15.2929" width="209.122" height="209.122" rx="39.5" transform="rotate(45 132.579 -15.2929)" stroke="#4285F4"/>
                    </svg>
                </div>
                <div className="container text-white">

                    <h1>GDSC Uba</h1>
                    <p>Google Developer Student Clubs <br /> Univerty of Bamenda</p>

                    <div className="d-flex justify-content-between my-5">
                        <h4>2022</h4>
                        <div className="d-flex">
                            <a href="#" className="me-2">
                                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00192 3.56228C6.00192 5.12737 4.81023 6.39397 2.94663 6.39397C1.15564 6.39397 -0.0360477 5.12737 0.000832462 3.56228C-0.0360477 1.92112 1.15561 0.691406 2.98233 0.691406C4.8102 0.691406 5.96619 1.92112 6.00192 3.56228ZM0.150664 26.8612V8.63097H5.81635V26.8601H0.150664V26.8612Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3577 14.4493C10.3577 12.1754 10.2828 10.2369 10.2079 8.63374H15.1291L15.3907 11.1312H15.5025C16.2481 9.97526 18.1118 8.22461 21.1313 8.22461C24.8585 8.22461 27.6545 10.6852 27.6545 16.0512V26.864H21.9888V16.7612C21.9888 14.4112 21.1693 12.8092 19.119 12.8092C17.5528 12.8092 16.6216 13.8903 16.2493 14.9333C16.0995 15.3067 16.0257 15.8276 16.0257 16.3509V26.864H10.36V14.4493H10.3577Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#" className="me-2">
                                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6544 3.65143C29.5515 4.1414 28.3646 4.47137 27.1197 4.62036C28.3906 3.85841 29.3665 2.6525 29.8255 1.21559C28.6376 1.92154 27.3186 2.43251 25.9177 2.7095C24.7948 1.51358 23.1939 0.765625 21.425 0.765625C18.0263 0.765625 15.2704 3.52144 15.2704 6.92021C15.2704 7.40218 15.3254 7.87215 15.4304 8.32312C10.3148 8.06714 5.78008 5.6163 2.74428 1.89255C2.21432 2.80149 1.91134 3.85843 1.91134 4.98635C1.91134 7.12121 2.99626 9.00508 4.64915 10.109C3.63922 10.077 2.69128 9.80003 1.86034 9.33906V9.41605C1.86034 12.3988 3.98319 14.8857 6.79701 15.4526C6.28104 15.5926 5.73708 15.6686 5.17612 15.6686C4.77914 15.6686 4.39317 15.6296 4.01719 15.5576C4.80014 18.0025 7.07399 19.7824 9.76681 19.8324C7.66095 21.4823 5.00713 22.4672 2.12332 22.4672C1.62535 22.4672 1.13539 22.4382 0.654419 22.3802C3.37824 24.1261 6.61302 25.146 10.0888 25.146C21.409 25.146 27.5996 15.7676 27.5996 7.63516C27.5996 7.36818 27.5946 7.10221 27.5816 6.83922C28.7855 5.96928 29.8295 4.88535 30.6544 3.65143Z" fill="white"/>
                                </svg>
                            </a>

                            <a href="#" className="me-2">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1359 27.6543C21.7724 27.6543 27.963 21.4637 27.963 13.8271C27.963 6.19062 21.7724 0 14.1359 0C6.49934 0 0.308716 6.19062 0.308716 13.8271C0.308716 21.4637 6.49934 27.6543 14.1359 27.6543ZM9.76475 26.9477C6.64557 25.9092 4.02043 23.7903 2.33363 21.0346C4.76345 25.0047 9.14026 27.6539 14.1358 27.6539C18.4243 27.6539 22.2567 25.7016 24.7929 22.6374C23.1618 24.6077 20.9945 26.1182 18.5146 26.946C17.8126 27.081 17.5639 26.6506 17.5639 26.2805C17.5639 26.1305 17.5657 25.8669 17.5682 25.5143L17.5682 25.5132V25.513C17.5732 24.8 17.5808 23.7237 17.5808 22.4879C17.5808 21.1977 17.1386 20.3539 16.642 19.9269C19.7225 19.5849 22.9557 18.416 22.9557 13.104C22.9557 11.5948 22.4201 10.3606 21.5339 9.39373C21.6765 9.044 22.151 7.63833 21.3964 5.73439C21.3964 5.73439 20.2377 5.3626 17.5978 7.15195C16.4935 6.84551 15.3102 6.69188 14.1363 6.68678C12.9606 6.69188 11.7773 6.84551 10.6747 7.15195C8.03312 5.3626 6.87191 5.73439 6.87191 5.73439C6.11984 7.63833 6.59434 9.044 6.73694 9.39373C5.85245 10.3606 5.31344 11.5948 5.31344 13.104C5.31344 18.4024 8.54157 19.5891 11.6118 19.938C11.2163 20.2835 10.8597 20.8929 10.7341 21.7868C9.9464 22.1399 7.94314 22.7502 6.70978 20.6374C6.70978 20.6374 5.97978 19.3107 4.59193 19.2122C4.59193 19.2122 3.24143 19.1953 4.49686 20.0534C4.49686 20.0534 5.40342 20.4787 6.03241 22.0754C6.03241 22.0754 6.84389 24.7645 10.69 23.9292C10.6936 24.5481 10.6987 25.0854 10.7027 25.5011L10.7027 25.5015C10.7061 25.8604 10.7087 26.1287 10.7087 26.2805C10.7087 26.6472 10.4565 27.0742 9.76475 26.9477Z" fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-image bg2">
                    <svg width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle r="102" transform="matrix(1 0 0 -1 102.5 102.5)" stroke="black"/>
                    </svg>
                </div>
            </footer>
        </div>
     );
}
 
export default Home;