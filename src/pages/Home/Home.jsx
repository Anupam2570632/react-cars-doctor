import Services from "../Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="mt-[68px]">
                <Banner />
                <AboutUs />
                <Services/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;