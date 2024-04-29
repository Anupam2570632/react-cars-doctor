import Banner from "./components/Banner/Banner";
import NavBar from "./components/Navbar/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="mt-[68px]"> 
            <Banner/>
            </div>
        </div>
    );
};

export default Home;