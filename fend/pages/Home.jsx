import Featured from "../../component/featured/Featured";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Navbar from "../../component/Navbar/Navbar";
import PropertyList from "../../component/propertyList/PropertyList";
import "./home.css"

const  Home=()=>{
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Serching by type of hotel</h1>
                <PropertyList/>
                <Footer/>
              

            </div>
        </div>
    )
}
export default Home;