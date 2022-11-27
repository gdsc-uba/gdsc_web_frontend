import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <section className="container text-center py-5">
                <h4>Welcome to</h4>
                <h1>GDSC UBA</h1>
                <p>Google Developer Student Club Univerty of Bamenda</p>
            </section>
        </div>
     );
}
 
export default Home;