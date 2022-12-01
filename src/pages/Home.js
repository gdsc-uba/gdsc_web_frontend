import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div>
            <Navbar />
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
        </div>
     );
}
 
export default Home;