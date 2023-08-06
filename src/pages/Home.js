import NavbarHome from "../components/NavbarHome"
import "../style/homePage.css"
import AsNavFor from "../components/AsNavFor"

const Home = () => {


    return (
        <div className="bgHome">
            <NavbarHome />
            <AsNavFor />
        </div>
    )
}

export default Home